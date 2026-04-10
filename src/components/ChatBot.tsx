import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, User, Bot, Loader2, Key } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { categories } from '../services/services';

// Extend window interface for AI Studio APIs
declare global {
  interface Window {
    aistudio?: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

interface Message {
  role: 'user' | 'model';
  text: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Namaste! 🙏 I'm your Lavish Beauty assistant. How can I help you with our salon services today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasKey, setHasKey] = useState(false);
  const [localKey, setLocalKey] = useState<string | null>(localStorage.getItem('LAVISH_AI_KEY'));
  const [showKeyInput, setShowKeyInput] = useState(false);
  const [manualKey, setManualKey] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkKey = async () => {
      const storedKey = localStorage.getItem('LAVISH_AI_KEY');
      if (storedKey) {
        setLocalKey(storedKey);
        setHasKey(true);
        return;
      }

      // Check for the custom secret first to bypass "Paid Key" requirement
      const customKey = import.meta.env.VITE_SALON_KEY;
      if (customKey) {
        setHasKey(true);
        return;
      }

      if (window.aistudio) {
        const selected = await window.aistudio.hasSelectedApiKey();
        const systemKey = !!process.env.GEMINI_API_KEY;
        setHasKey(selected || systemKey);
      } else {
        setHasKey(!!process.env.GEMINI_API_KEY);
      }
    };
    checkKey();
  }, []);

  const handleConnectKey = async () => {
    if (window.aistudio) {
      try {
        await window.aistudio.openSelectKey();
        const selected = await window.aistudio.hasSelectedApiKey();
        if (selected) {
          setHasKey(true);
          setShowKeyInput(false);
        } else {
          setShowKeyInput(true);
        }
      } catch (err) {
        setShowKeyInput(true);
      }
    } else {
      setShowKeyInput(true);
    }
  };

  const saveManualKey = () => {
    if (manualKey.startsWith('AIza')) {
      localStorage.setItem('LAVISH_AI_KEY', manualKey);
      setLocalKey(manualKey);
      setHasKey(true);
      setShowKeyInput(false);
      setMessages(prev => [...prev, { role: 'model', text: "Shabaash! AI Key connect ho gayi hai. Ab aap mujhse kuch bhi pooch sakte hain. 😊" }]);
    } else {
      alert("Kripya sahi API Key daalein (ye AIza... se shuru hoti hai)");
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const servicesContext = categories.map(cat => {
    const servicesList = cat.services.map(s => `${s.name}: ₹${s.price} (${s.description})`).join('\n');
    return `Category: ${cat.name}\n${servicesList}`;
  }).join('\n\n');

  const systemInstruction = `You are a helpful AI assistant for 'Lavish Beauty Home Salon', a premium home salon service in Bareilly, UP.
Your goal is to provide details about our services and business information to potential customers.

Business Details:
- Name: Lavish Beauty Home Salon
- Address: Sheel chauraha near kipps super market Bareilly UP
- Phone/WhatsApp: +91 80773 41187
- Service Area: Bareilly, UP (Home Salon Service)

Services Offered:
${servicesContext}

Guidelines:
- Be professional, polite, and welcoming.
- If asked about prices, provide the exact price from the service list.
- If asked how to book, tell them they can use the 'Add to Cart' button or contact us directly via WhatsApp (+91 80773 41187).
- Keep responses concise but informative.
- If you don't know the answer, politely ask them to contact us on WhatsApp for more details.
- Answer in the language the user uses (Hindi or English).
- Do not mention that you are an AI model or Gemini. Just act as the salon assistant.`;

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // Create a new instance right before the call as per guidelines
      // Priority: Local Storage > Custom Secret (VITE_SALON_KEY) > System Key
      const apiKey = localKey || import.meta.env.VITE_SALON_KEY || process.env.GEMINI_API_KEY || "";
      const ai = new GoogleGenAI({ apiKey });

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          ...messages.map(m => ({ role: m.role, parts: [{ text: m.text }] })),
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const aiText = response.text || "I'm sorry, I couldn't process that. Please try again or contact us on WhatsApp.";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error: any) {
      console.error("ChatBot Error:", error);
      
      const errorMessage = error?.message || "";
      
      if (errorMessage.includes("API key not valid") || errorMessage.includes("Requested entity was not found") || errorMessage.includes("API_KEY_INVALID")) {
        setHasKey(false);
        setMessages(prev => [...prev, { role: 'model', text: "AI Assistant connect nahi hai. Kripya niche diye gaye 'Connect AI' button par click karein taaki chat phir se shuru ho sake. 👇" }]);
      } else if (errorMessage.includes("429") || errorMessage.toLowerCase().includes("too many requests") || errorMessage.includes("quota")) {
        setMessages(prev => [...prev, { role: 'model', text: "Bahut saare log ek saath chat kar rahe hain (Rate Limit). Kripya 30-60 seconds intezar karein, ye apne aap theek ho jayega. 🙏" }]);
      } else {
        setMessages(prev => [...prev, { role: 'model', text: "Maaf kijiyega, server mein thodi dikkat aa rahi hai. Kripya 1 minute baad try karein ya humein WhatsApp (+91 80773 41187) par message karein." }]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-28 right-8 z-40 bg-ink text-cream p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group border border-gold/20"
      >
        <Bot className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-ink text-cream px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Ask AI Assistant
        </span>
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-8 right-8 z-50 w-[90vw] max-w-[400px] h-[600px] max-h-[80vh] bg-cream rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-ink/5"
          >
            {/* Header */}
            <div className="bg-ink p-6 flex justify-between items-center">
              <div className="flex items-center gap-3 text-cream">
                <div className="p-2 bg-gold rounded-xl text-ink">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="serif text-lg leading-tight">Lavish AI</h3>
                  <p className="text-[10px] uppercase tracking-widest text-cream/50">Online Assistant</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={handleConnectKey}
                  className="p-2 text-cream/50 hover:text-gold transition-colors"
                  title="Connect AI Key"
                >
                  <Key className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-cream/50 hover:text-cream transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-grow overflow-y-auto p-6 space-y-4 bg-cream/50"
            >
              {(!hasKey || showKeyInput) && (
                <div className="bg-gold/10 border border-gold/20 p-5 rounded-2xl mb-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-3 text-gold">
                    <Key className="w-5 h-5" />
                    <p className="text-xs font-bold uppercase tracking-wider">AI Connection Required</p>
                  </div>
                  
                  {!showKeyInput ? (
                    <>
                      <p className="text-xs text-ink/70 mb-4 leading-relaxed">Chat shuru karne ke liye niche wala button dabayein.</p>
                      <button 
                        onClick={handleConnectKey}
                        className="w-full py-4 bg-gold text-ink rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
                      >
                        Connect AI Assistant
                      </button>
                    </>
                  ) : (
                    <div className="space-y-3">
                      <p className="text-[11px] text-ink/70">Apni API Key yahan paste karein:</p>
                      <input 
                        type="password"
                        value={manualKey}
                        onChange={(e) => setManualKey(e.target.value)}
                        placeholder="AIzaSy..."
                        className="w-full bg-white border border-gold/30 rounded-xl px-4 py-3 text-xs outline-none focus:ring-2 focus:ring-gold"
                      />
                      <div className="flex gap-2">
                        <button 
                          onClick={saveManualKey}
                          className="flex-grow py-3 bg-ink text-cream rounded-xl text-[10px] font-bold uppercase tracking-widest"
                        >
                          Save Key
                        </button>
                        <button 
                          onClick={() => setShowKeyInput(false)}
                          className="px-4 py-3 bg-ink/5 text-ink/50 rounded-xl text-[10px] font-bold uppercase tracking-widest"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                  
                  <p className="text-[9px] text-ink/40 mt-4 text-center italic">
                    Note: "Publish" button mat dabaiye. Bas key daal kar "Share" link use karein.
                  </p>
                </div>
              )}
              {messages.map((m, i) => (
                <div 
                  key={i} 
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-3 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${m.role === 'user' ? 'bg-gold text-ink' : 'bg-ink text-cream'}`}>
                      {m.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                      m.role === 'user' 
                        ? 'bg-ink text-cream rounded-tr-none' 
                        : 'bg-white text-ink border border-ink/5 rounded-tl-none shadow-sm'
                    }`}>
                      {m.text}
                      {m.text.includes("Rate Limit") && (
                        <button 
                          onClick={() => handleSend()}
                          className="mt-2 block text-[10px] font-bold text-gold hover:underline"
                        >
                          Retry Now
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-3 max-w-[85%]">
                    <div className="w-8 h-8 rounded-full bg-ink text-cream flex items-center justify-center shrink-0">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="p-4 bg-white text-ink border border-ink/5 rounded-2xl rounded-tl-none shadow-sm">
                      <Loader2 className="w-4 h-4 animate-spin text-gold" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 bg-white border-t border-ink/5">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-grow bg-ink/5 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-gold outline-none transition-all"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="p-3 bg-ink text-cream rounded-xl hover:bg-gold disabled:opacity-50 disabled:hover:bg-ink transition-all"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
              <p className="text-[9px] text-center mt-4 text-ink/30 uppercase tracking-widest">
                AI can make mistakes. For bookings, use WhatsApp.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
