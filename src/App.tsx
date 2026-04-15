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
    <div className="fixed inset-0 bg-white z-[100] flex items-center justify-center p-6">
      <div className="text-center p-12 border border-ink/10 rounded-3xl shadow-2xl max-w-md w-full">
        <h1 className="serif text-4xl font-bold text-ink mb-4">AI Chat Payment Required</h1>
        <p className="text-ink/60 text-lg">Please complete the payment to restore access to your website.</p>
      </div>
    </div>
  );
}
