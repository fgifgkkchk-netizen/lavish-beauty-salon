/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  X, 
  Plus, 
  Minus, 
  MessageCircle, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook,
  ChevronRight,
  ArrowLeft,
  Sparkles,
  Droplets,
  Wind,
  Scissors,
  Zap,
  Heart
} from 'lucide-react';
import { categories, Category, Service } from './services/services';
import ChatBot from './components/ChatBot';

const OWNER_WHATSAPP = "917250019256";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0]);
  const [cart, setCart] = useState<{ service: Service; quantity: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const [userDetails, setUserDetails] = useState(() => {
    const saved = localStorage.getItem('lavish_beauty_user');
    return saved ? JSON.parse(saved) : {
      name: '',
      phone: '',
      address: '',
      date: '',
      time: ''
    };
  });

  const scrollToServices = () => {
    const servicesElement = document.getElementById('services-section');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToMenu = () => {
    const menuElement = document.getElementById('menu-board');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    localStorage.setItem('lavish_beauty_user', JSON.stringify(userDetails));
  }, [userDetails]);

  const cartTotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.service.price * item.quantity, 0);
  }, [cart]);

  const addToCart = (service: Service) => {
    setCart(prev => {
      const existing = prev.find(item => item.service.id === service.id);
      if (existing) {
        return prev.map(item => 
          item.service.id === service.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { service, quantity: 1 }];
    });
  };

  const removeFromCart = (serviceId: string) => {
    setCart(prev => prev.filter(item => item.service.id !== serviceId));
  };

  const updateQuantity = (serviceId: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.service.id === serviceId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const handleWhatsAppOrder = () => {
    if (!userDetails.name || !userDetails.phone || !userDetails.address) {
      alert("Please fill in all details");
      return;
    }

    const cartDetails = cart.map(item => 
      `• ${item.service.name} x${item.quantity} - ₹${item.service.price * item.quantity}`
    ).join('\n');

    const message = `*New Booking Request*\n\n` +
      `*Customer Details:*\n` +
      `Name: ${userDetails.name}\n` +
      `Phone: ${userDetails.phone}\n` +
      `Address: ${userDetails.address}\n` +
      `Date: ${userDetails.date}\n` +
      `Time: ${userDetails.time}\n\n` +
      `*Services:*\n${cartDetails}\n\n` +
      `*Total: ₹${cartTotal}*`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${OWNER_WHATSAPP}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-cream/80 backdrop-blur-md border-b border-ink/5 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/20 bg-white p-1 flex items-center justify-center">
            <img 
              src="https://drive.google.com/thumbnail?id=1eGqRx5XtdZqwM-y2dco_EpIaw1DR-CQd&sz=w500" 
              alt="" 
              className="w-full h-full object-contain rounded-full"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  const fallback = document.createElement('div');
                  fallback.className = 'w-full h-full flex items-center justify-center bg-gold text-white font-bold text-xl rounded-full';
                  fallback.innerText = 'L';
                  parent.appendChild(fallback);
                }
              }}
            />
          </div>
          <h1 className="serif text-2xl font-bold tracking-tight hidden sm:block">Lavish Beauty</h1>
        </div>
        
        <button 
          onClick={() => setIsCartOpen(true)}
          className="relative p-2 hover:bg-ink/5 rounded-full transition-colors"
        >
          <ShoppingBag className="w-6 h-6" />
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-gold text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cart.reduce((a, b) => a + b.quantity, 0)}
            </span>
          )}
        </button>
      </nav>

      <main className="flex-grow">
        {/* Hero Banner Section */}
        <section className="relative w-full overflow-hidden bg-ink">
          <motion.div 
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="w-full"
          >
            <img 
              src="https://drive.google.com/thumbnail?id=1myy2pAnj_snfvB6SklxaxaZdeHcY2iaW&sz=w1920" 
              alt="Lavish Beauty Salon Banner" 
              className="w-full h-auto block"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-ink/40 pointer-events-none" />
          </motion.div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-4xl pointer-events-auto"
            >
              <span className="text-gold uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold mb-6 block bg-ink/30 backdrop-blur-md px-6 py-2 rounded-full w-fit mx-auto border border-gold/20">
                Welcome to Lavish Beauty
              </span>
              <h1 className="serif text-4xl md:text-7xl text-cream font-light mb-8 leading-tight drop-shadow-2xl">
                Your Beauty, <br />
                <span className="italic text-gold">Our Passion</span>
              </h1>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={scrollToMenu}
                  className="px-8 py-4 bg-gold text-ink rounded-full uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-cream transition-all shadow-2xl"
                >
                  View Services
                </button>
                <a 
                  href={`https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent("Hi, I'm interested in your salon services. Could you please provide more details?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-ink text-cream rounded-full uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-gold transition-all shadow-2xl border border-gold/20"
                >
                  Book Appointment
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-20 max-w-7xl mx-auto text-center">
          <motion.span 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4 block"
          >
            Feel Beautiful With Us
          </motion.span>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="serif text-5xl md:text-8xl font-light mb-8 leading-tight"
          >
            Premium Home Salon <br />
            <span className="italic text-gold">Experience</span>
          </motion.h2>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 text-ink/60 text-sm mb-12"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold" />
              <span>Sheel chauraha near kipps super market Bareilly UP</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-gold" />
                <a 
                  href="https://wa.me/917250019256" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-gold transition-colors"
                >
                  +91 72500 19256
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-gold" />
                <a 
                  href="https://wa.me/918077341187" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-gold transition-colors"
                >
                  +91 80773 41187
                </a>
              </div>
            </div>
          </motion.div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={scrollToMenu}
            className="px-10 py-4 bg-ink text-cream rounded-full uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-gold transition-all shadow-xl"
          >
            Explore Menu
          </motion.button>
        </section>

        {/* Menu Board */}
        <section id="menu-board" className="bg-cream pt-20">
          <div className="max-w-7xl mx-auto px-6 text-center mb-12">
            <h2 className="serif text-6xl mb-4">Our Menu</h2>
            <p className="uppercase tracking-[0.2em] text-[10px] font-bold text-ink/40 mb-12">Select a category to explore our services</p>
            
            <div className="flex justify-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-ink/30">
              <span>Premium</span>
              <span>Professional</span>
              <span>Home Salon</span>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 pb-20">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category);
                    scrollToServices();
                  }}
                  className={`p-4 rounded-3xl text-[10px] font-bold uppercase tracking-widest transition-all flex flex-col items-center justify-center gap-3 ${
                    selectedCategory.id === category.id 
                      ? 'bg-ink text-cream shadow-2xl scale-105 z-10' 
                      : 'bg-white text-ink/60 hover:bg-white hover:text-ink hover:shadow-xl border border-ink/5'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-2xl overflow-hidden transition-colors flex items-center justify-center ${selectedCategory.id === category.id ? 'bg-gold text-ink' : 'bg-ink/5 text-ink/20'}`}>
                    {category.image.includes('drive.google.com') ? (
                      <img 
                        src={category.image} 
                        alt="" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <>
                        {category.id === 'facial' && <Sparkles className="w-8 h-8" />}
                        {category.id === 'honey-wax' && <Droplets className="w-8 h-8" />}
                        {category.id === 'meni-pedi' && <ShoppingBag className="w-8 h-8" />}
                        {category.id === 'bleach' && <Zap className="w-8 h-8" />}
                        {category.id === 'body-polishing' && <Wind className="w-8 h-8" />}
                        {category.id === 'body-massage' && <Heart className="w-8 h-8" />}
                        {category.id === 'hair-spa' && <Droplets className="w-8 h-8" />}
                        {category.id === 'hair-colour' && <Scissors className="w-8 h-8" />}
                        {category.id === 'hair-cut' && <Scissors className="w-8 h-8" />}
                        {category.id === 'makeup' && <Sparkles className="w-8 h-8" />}
                        {category.id === 'rica-wax' && <Droplets className="w-8 h-8" />}
                        {!['facial', 'honey-wax', 'meni-pedi', 'bleach', 'body-polishing', 'body-massage', 'hair-spa', 'hair-colour', 'rica-wax', 'hair-cut', 'makeup'].includes(category.id) && <ChevronRight className="w-8 h-8" />}
                      </>
                    )}
                  </div>
                  <span className="text-center leading-tight">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <div id="services-section" className="px-6 py-20 max-w-7xl mx-auto scroll-mt-48">
          <div className="mb-16">
            <h2 className="serif text-5xl mb-4">{selectedCategory.name}</h2>
            <p className="text-ink/60 max-w-2xl">Explore our premium {selectedCategory.name.toLowerCase()} services designed to rejuvenate and pamper you in the comfort of your home.</p>
          </div>

          <div className="space-y-6">
            {selectedCategory.services.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="flex flex-col md:flex-row gap-6 p-4 rounded-2xl border border-ink/5 hover:border-gold/30 hover:bg-gold/5 transition-all group"
              >
                <div className="w-full md:w-48 aspect-[4/3] rounded-xl overflow-hidden bg-white shrink-0 border border-ink/5">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-contain transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-grow flex flex-col justify-between py-2">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="serif text-2xl font-medium">{service.name}</h4>
                      <div className="flex flex-col items-end">
                        {service.originalPrice && (
                          <span className="text-ink/30 line-through text-sm">₹{service.originalPrice}</span>
                        )}
                        <span className="text-gold font-bold text-xl">₹{service.price}</span>
                      </div>
                    </div>
                    <p className="text-ink/60 text-sm mb-6 leading-relaxed">{service.description}</p>
                  </div>
                  <div className="flex justify-end">
                    <button 
                      onClick={() => addToCart(service)}
                      className="px-8 py-3 bg-ink text-cream rounded-lg hover:bg-gold transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      <Plus className="w-4 h-4 group-hover/btn:rotate-90 transition-transform" />
                      <span className="uppercase tracking-widest text-[10px] font-bold">Add to Cart</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <section className="w-full overflow-hidden mt-20">
          <img 
            src="https://drive.google.com/thumbnail?id=1ldZDlHUz4Y8f6eFGTxjVFuhRe19HKl8d&sz=w1920" 
            alt="Lavish Beauty Bottom Banner" 
            className="w-full h-auto block"
            referrerPolicy="no-referrer"
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-ink text-cream py-20 px-6 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/20 bg-white p-1 flex items-center justify-center">
                <img 
                  src="https://drive.google.com/thumbnail?id=1eGqRx5XtdZqwM-y2dco_EpIaw1DR-CQd&sz=w500" 
                  alt="" 
                  className="w-full h-full object-contain rounded-full"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = 'w-full h-full flex items-center justify-center bg-gold text-white font-bold text-xl rounded-full';
                      fallback.innerText = 'L';
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
              <h1 className="serif text-2xl font-bold tracking-tight">Lavish Beauty</h1>
            </div>
            <p className="text-cream/60 text-sm leading-relaxed mb-8">
              Bringing premium salon services to your doorstep. Experience luxury, comfort, and professional care in Bareilly.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-cream/10 rounded-full hover:bg-cream hover:text-ink transition-all"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="p-2 border border-cream/10 rounded-full hover:bg-cream hover:text-ink transition-all"><Facebook className="w-4 h-4" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="serif text-xl mb-8">Quick Links</h4>
            <ul className="space-y-4 text-cream/60 text-sm">
              <li><button onClick={() => setSelectedCategory(null)} className="hover:text-gold transition-colors">Home</button></li>
              {categories.slice(0, 4).map(cat => (
                <li key={cat.id}><button onClick={() => setSelectedCategory(cat)} className="hover:text-gold transition-colors">{cat.name}</button></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="serif text-xl mb-8">Contact Us</h4>
            <div className="space-y-6 text-cream/60 text-sm">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-gold shrink-0" />
                <div className="flex flex-col gap-2">
                  <span>Sheel chauraha near kipps super market Bareilly UP</span>
                  <a 
                    href="https://maps.app.goo.gl/u4UkW8mhYAzTkTzd6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gold text-sm hover:underline flex items-center gap-1"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <MessageCircle className="w-5 h-5 text-gold shrink-0" />
                <div className="flex flex-col gap-1">
                  <a 
                    href="https://wa.me/917250019256" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-gold transition-colors"
                  >
                    +91 72500 19256
                  </a>
                  <a 
                    href="https://wa.me/918077341187" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-gold transition-colors"
                  >
                    +91 80773 41187
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <MessageCircle className="w-5 h-5 text-gold shrink-0" />
                <a 
                  href={`https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent("Hi, I'm interested in your salon services. Could you please provide more details?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-20 mt-20 border-t border-cream/5 text-center text-cream/30 text-xs uppercase tracking-widest">
          © 2026 Lavish Beauty Home Salon. All Rights Reserved.
        </div>
      </footer>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-ink/40 backdrop-blur-sm z-50"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-ink/5 flex justify-between items-center">
                <h3 className="serif text-2xl">Your Selection</h3>
                <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-ink/5 rounded-full"><X className="w-5 h-5" /></button>
              </div>

              <div className="flex-grow overflow-y-auto p-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-ink/40">
                    <ShoppingBag className="w-12 h-12 mb-4 opacity-20" />
                    <p className="uppercase tracking-widest text-xs font-bold">Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-8">
                    {cart.map(item => (
                      <div key={item.service.id} className="flex gap-4">
                        <div className="w-20 h-20 rounded-lg overflow-hidden bg-ink/5 shrink-0">
                          <img src={item.service.image} alt={item.service.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between mb-1">
                            <h4 className="serif text-lg">{item.service.name}</h4>
                            <button onClick={() => removeFromCart(item.service.id)} className="text-ink/30 hover:text-red-500"><X className="w-4 h-4" /></button>
                          </div>
                          <div className="flex items-center gap-2 mb-4">
                            {item.service.originalPrice && (
                              <span className="text-ink/30 line-through text-xs">₹{item.service.originalPrice}</span>
                            )}
                            <p className="text-gold font-semibold text-sm">₹{item.service.price}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center border border-ink/10 rounded-md">
                              <button onClick={() => updateQuantity(item.service.id, -1)} className="p-1 px-2 hover:bg-ink/5"><Minus className="w-3 h-3" /></button>
                              <span className="px-2 text-xs font-bold">{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.service.id, 1)} className="p-1 px-2 hover:bg-ink/5"><Plus className="w-3 h-3" /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 border-t border-ink/5 bg-ink/5">
                  <div className="flex justify-between items-center mb-6">
                    <span className="uppercase tracking-widest text-xs font-bold text-ink/60">Total Amount</span>
                    <span className="serif text-2xl font-bold">₹{cartTotal}</span>
                  </div>
                  <button 
                    onClick={() => {
                      setIsCartOpen(false);
                      setIsBookingFormOpen(true);
                    }}
                    className="w-full py-4 bg-ink text-cream rounded-xl hover:bg-gold transition-colors uppercase tracking-widest text-xs font-bold"
                  >
                    Proceed to Booking
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Booking Form Modal */}
      <AnimatePresence>
        {isBookingFormOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookingFormOpen(false)}
              className="absolute inset-0 bg-ink/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-lg bg-cream rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="p-8 border-b border-ink/5 flex justify-between items-center">
                <h3 className="serif text-3xl">Booking Details</h3>
                <button onClick={() => setIsBookingFormOpen(false)} className="p-2 hover:bg-ink/5 rounded-full"><X className="w-6 h-6" /></button>
              </div>
              
              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-ink/40">Full Name</label>
                  <input 
                    type="text" 
                    value={userDetails.name}
                    onChange={e => setUserDetails({...userDetails, name: e.target.value})}
                    placeholder="Enter your name"
                    className="w-full bg-ink/5 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-ink/40">Phone Number</label>
                  <input 
                    type="tel" 
                    value={userDetails.phone}
                    onChange={e => setUserDetails({...userDetails, phone: e.target.value})}
                    placeholder="Enter your phone"
                    className="w-full bg-ink/5 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-ink/40">Address</label>
                  <textarea 
                    value={userDetails.address}
                    onChange={e => setUserDetails({...userDetails, address: e.target.value})}
                    placeholder="Enter your full address in Bareilly"
                    rows={3}
                    className="w-full bg-ink/5 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold outline-none transition-all resize-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-ink/40">Preferred Date</label>
                    <input 
                      type="date" 
                      value={userDetails.date}
                      onChange={e => setUserDetails({...userDetails, date: e.target.value})}
                      className="w-full bg-ink/5 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-ink/40">Preferred Time</label>
                    <input 
                      type="time" 
                      value={userDetails.time}
                      onChange={e => setUserDetails({...userDetails, time: e.target.value})}
                      className="w-full bg-ink/5 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold outline-none transition-all"
                    />
                  </div>
                </div>

                <button 
                  onClick={handleWhatsAppOrder}
                  className="w-full py-4 bg-ink text-cream rounded-xl hover:bg-gold transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-xs font-bold group"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Save & Send to WhatsApp
                </button>
                <p className="text-center text-[10px] text-ink/40 uppercase tracking-widest">
                  Clicking "Send" will open WhatsApp with your booking details.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Icon */}
      <a 
        href={`https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent("Hi, I'm interested in your salon services. Could you please provide more details?")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-ink text-cream px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat with us
        </span>
      </a>
      <ChatBot />
    </div>
  );
}
