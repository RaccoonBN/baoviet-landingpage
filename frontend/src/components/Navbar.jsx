// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white shadow-xl py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* 1. Logo Image - Thay thế text bằng ảnh để chuyên nghiệp hơn */}
       {/* 1. Logo Image - Xử lý cắt khoảng trắng file vuông */}
        <div className="flex items-center">
          <a href="/" className="block">
            <div className="relative h-14 md:h-20 w-40 md:w-56 overflow-hidden">
              <img 
                src="/assets/logo.svg" 
                alt="BaoViet Life Logo" 
                className={`
                  absolute inset-0 h-full w-full object-cover transition-all duration-300
                  ${isScrolled ? '' : 'brightness-0 invert'}
                `}
                style={{ 
                   // Điều chỉnh % này để logo nằm ngay ngắn trong khung
                   objectPosition: '20% center', 
                   transform: 'scale(0.8)' 
                }}
              />
            </div>
          </a>
        </div>

        {/* 2. Menu giữa - Giãn cách chữ sang trọng */}
        <div className={`hidden md:flex space-x-10 font-medium tracking-wide text-sm uppercase ${
          isScrolled ? 'text-[#0A1F3D]' : 'text-white'
        }`}>
          <a href="#" className="hover:text-[#1B6FC8] transition-colors">Trang chủ</a>
          <a href="#products" className="hover:text-[#1B6FC8] transition-colors">Sản phẩm</a>
          <a href="#features" className="hover:text-[#1B6FC8] transition-colors">Ưu điểm</a>
        </div>

        {/* 3. Nhóm Action Buttons */}
        <div className="flex items-center gap-4">
          {/* Button Đăng ký - Cùng màu #1B6FC8 với Hero */}
          <a 
            href="#register" 
            className="hidden sm:block bg-[#1B6FC8] hover:bg-[#3FA9F5] text-white px-7 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Đăng ký tư vấn
          </a>
          
          {/* Hotline - Xử lý để luôn nổi bật */}
          <a 
            href="tel:090xxxxxxx" 
            className={`p-2.5 rounded-full border-2 transition-all duration-300 ${
              isScrolled 
                ? 'border-[#1B6FC8] text-[#1B6FC8] hover:bg-[#1B6FC8] hover:text-white' 
                : 'border-white/80 text-white bg-white/10 backdrop-blur-md hover:bg-white hover:text-[#0A1F3D]'
            }`}
          >
            <Phone size={18} fill={isScrolled ? "none" : "currentColor"} className="opacity-90" />
          </a>
        </div>
      </div>
    </nav>
  );
}