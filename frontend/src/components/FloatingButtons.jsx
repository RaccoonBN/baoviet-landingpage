// src/components/FloatingButtons.jsx
import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const actions = [
    {
      id: 'messenger',
      icon: <MessageSquare size={24} />,
      color: 'bg-[#0084FF]',
      link: 'https://m.me/your-id',
      label: 'Messenger'
    },
    {
      id: 'zalo',
      icon: <span className="text-[11px] font-black italic tracking-tighter">ZALO</span>,
      color: 'bg-[#0068FF]',
      link: 'https://zalo.me/090xxxxxxx',
      label: 'Zalo Chat'
    },
    {
      id: 'phone',
      icon: <Phone size={24} fill="currentColor" />,
      color: 'bg-[#22C55E]',
      link: 'tel:090xxxxxxx',
      label: 'Hotline',
      pulse: true
    }
  ];

  return (
    <div className="fixed bottom-8 right-6 flex flex-col gap-4 z-[9999]">
      {/* Nhóm các nút liên hệ */}
      {actions.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.5, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative group flex items-center justify-end"
        >
          {/* Tooltip nhỏ xinh */}
          <span className="absolute right-16 px-3 py-1.5 bg-[#0A1F3D] text-white text-[10px] font-bold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl border border-white/10 uppercase tracking-widest">
            {item.label}
          </span>

          <div className="relative">
            {item.pulse && (
              <span className="absolute inset-0 rounded-full bg-[#22C55E] animate-ping opacity-40"></span>
            )}
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${item.color} text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-115 hover:-translate-y-1 active:scale-90 relative z-10`}
            >
              {item.icon}
            </a>
          </div>
        </motion.div>
      ))}

      {/* Nút Back to Top - Tròn và tối giản */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="w-14 h-14 bg-white text-[#0A1F3D] rounded-full shadow-md flex flex-col items-center justify-center border border-gray-100 hover:bg-gray-50 transition-all active:scale-90 group"
          >
            <ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            <span className="text-[8px] font-black uppercase tracking-tighter -mt-1">TOP</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}