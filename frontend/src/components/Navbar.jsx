// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react'; // Thêm Menu và X cho responsive

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Trạng thái đóng/mở menu mobile

  const menuItems = [
    { id: 'home', label: 'Trang chủ', href: '#home' },
    { id: 'products', label: 'Sản phẩm', href: '#products' },
    { id: 'features', label: 'Ưu điểm', href: '#features' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Logic Scroll Spy
      const scrollPosition = window.scrollY + 120;
      if (window.scrollY < 50) {
        setActiveSection('home');
        return;
      }

      for (const item of menuItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          
          {/* 1. Logo */}
          <div className="flex items-center">
            <a href="#home" onClick={() => setActiveSection('home')} className="block">
              <div className="relative h-9 md:h-12 w-32 md:w-48 overflow-hidden flex items-center">
                <img 
                  src="/assets/logo.svg" 
                  alt="BaoViet Life Logo" 
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-300 ${
                    isScrolled || isMobileMenuOpen ? '' : 'brightness-0 invert'
                  }`}
                  style={{ objectPosition: '20% center', transform: 'scale(0.8)' }}
                />
              </div>
            </a>
          </div>

          {/* 2. Menu giữa (Desktop) */}
          <div className="hidden md:flex space-x-10 font-medium tracking-wide text-sm uppercase">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              let textColorClass = isScrolled 
                ? (isActive ? 'text-[#1B6FC8] font-bold' : 'text-[#0A1F3D] hover:text-[#1B6FC8]')
                : (isActive ? 'text-[#3FA9F5] font-bold' : 'text-white hover:text-[#3FA9F5]');

              return (
                <a 
                  key={item.id}
                  href={item.href} 
                  onClick={() => setActiveSection(item.id)}
                  className={`relative py-1 transition-all duration-300 ${textColorClass}`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-current transition-all duration-300 ${
                    isActive ? 'w-full opacity-100' : 'w-0 opacity-0'
                  }`} />
                </a>
              );
            })}
          </div>

          {/* 3. Nhóm Action Buttons & Hamburger */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a 
              href="#register" 
              className="hidden sm:block bg-[#1B6FC8] hover:bg-[#3FA9F5] text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Đăng ký tư vấn
            </a>
            
            <a 
              href="tel:090xxxxxxx" 
              className={`p-2 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                isScrolled 
                  ? 'border-[#1B6FC8] text-[#1B6FC8] hover:bg-[#1B6FC8] hover:text-white' 
                  : 'border-white/80 text-white bg-white/10 backdrop-blur-md hover:bg-white hover:text-[#0A1F3D]'
              }`}
            >
              <Phone size={15} fill={isScrolled ? "none" : "currentColor"} />
            </a>

            {/* Nút Hamburger bật tắt menu trên Mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-xl md:hidden transition-colors ${
                isScrolled ? 'text-[#0A1F3D] hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* 4. Khoang Menu Mobile (Dropdown) */}
      <div className={`fixed inset-x-0 top-0 z-40 bg-white shadow-xl border-b border-slate-100 pt-20 pb-6 px-6 md:hidden transition-all duration-350 ease-in-out ${
        isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col space-y-4 font-semibold text-base uppercase tracking-wide">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => {
                setActiveSection(item.id);
                setIsMobileMenuOpen(false); // Click xong tự đóng menu
              }}
              className={`py-2.5 border-b border-slate-50 last:border-0 ${
                activeSection === item.id ? 'text-[#1B6FC8]' : 'text-[#0A1F3D]'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center bg-[#1B6FC8] text-white py-3 rounded-xl font-bold uppercase tracking-wider text-xs block mt-4"
          >
            Đăng ký tư vấn
          </a>
        </div>
      </div>
    </>
  );
}