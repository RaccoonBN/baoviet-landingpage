import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import ContactForm from './components/ContactForm';
import FloatingButtons from './components/FloatingButtons';
import { 
  FaFacebookF, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaShieldAlt,
  FaChevronRight,
  FaGlobe
} from 'react-icons/fa';
import { IoChatbubblesSharp } from 'react-icons/io5';

function App() {
  return (
    // Sử dụng font-cabin đã cấu hình trong Tailwind v4
    <div className="min-h-screen bg-white font-cabin antialiased">
      
      {/* 1. Thanh điều hướng: Trang chủ, Sản phẩm, Ưu điểm */}
      <Navbar />

      <main>
        {/* 2. Banner chính: Slogan "Điểm Tựa Gia Đình Việt" */}
        <Hero />

        {/* 3. Phần Ưu điểm: Tạo sự tin cậy và uy tín */}
        <Features />

        {/* 4. Danh sách sản phẩm: An Khang Như Ý, An Tâm Hoạch Định, R26 
            Đặt trong nền màu kem nhạt (bv-warm) để tạo cảm giác gần gũi */}
        <div className="bg-bv-warm/50">
          <Products />
        </div>

        {/* 5. Form đăng ký: Nơi thu thập dữ liệu khách hàng */}
        <ContactForm />
      </main>

      {/* 6. Chân trang (Footer): Sang trọng và tinh tế */}
{/* FOOTER - Cập nhật Logo SVG & Thông tin địa điểm */}
<footer className="bg-[#0A1F3D] py-16 px-6 border-t border-white/5">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
      
      {/* 1. LOGO SVG & SLOGAN */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          {/* Thay thế mã SVG logo của bạn tại đây */}
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-bv-accent">
            <path d="M20 2L5 9V20C5 29.2 11.4 37.7 20 40C28.6 37.7 35 29.2 35 20V9L20 2Z" fill="currentColor" fillOpacity="0.2"/>
            <path d="M20 5L8 10.6V19.4C8 26.8 13.1 33.6 20 35.5C26.9 33.6 32 26.8 32 19.4V10.6L20 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 20L18.5 23.5L25 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-white font-bold text-xl tracking-tighter font-cabin">
            BAOVIET <span className="text-bv-accent">INSURANCE</span>
          </span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed italic pr-10">
          "Điểm tựa vững chắc cho mọi gia đình Việt, đồng hành cùng bạn trên mọi nẻo đường cuộc sống."
        </p>
      </div>

      {/* 2. THÔNG TIN LIÊN HỆ */}
      <div className="grid grid-cols-1 gap-8 md:col-span-2 md:flex md:justify-end md:gap-16">
        
        {/* Địa điểm */}
        <div className="flex items-start gap-4">
          <div className="mt-1 text-bv-accent">
            <FaMapMarkerAlt size={18} />
          </div>
          <div>
            <p className="text-sm text-white font-bold mb-1">Địa điểm</p>
            <p className="text-gray-400 text-sm leading-snug">
              Quận Phú Nhuận,<br />TP. Hồ Chí Minh
            </p>
          </div>
        </div>

        {/* Số điện thoại */}
        <div className="flex items-start gap-4">
          <div className="mt-1 text-bv-accent">
            <FaPhoneAlt size={18} />
          </div>
          <div>
            <p className="text-sm text-white font-bold mb-1">Hotline 24/7</p>
            <p className="text-lg font-bold text-white tracking-widest">090x xxx xxx</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="mt-1 text-bv-accent">
            <FaEnvelope size={18} />
          </div>
          <div>
            <p className="text-sm text-white font-bold mb-1">Email</p>
            <p className="text-gray-400 text-sm hover:text-bv-accent transition-colors cursor-pointer">
              tuvan.baoviet.hcm@gmail.com
            </p>
          </div>
        </div>
        
      </div>
    </div>

    {/* BẢN QUYỀN */}
    <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2 text-gray-500 text-[10px] tracking-[2px] uppercase font-bold">
        <FaShieldAlt size={14} className="text-bv-accent" />
        <span>© 2026 Bảo Hiểm Bảo Việt - Điểm Tựa Gia Đình Việt</span>
      </div>
      <div className="flex gap-6">
        <a href="#" className="text-gray-500 hover:text-white transition-colors"><FaFacebookF size={16} /></a>
        <a href="#" className="text-gray-500 hover:text-white transition-colors"><FaGlobe size={16} /></a>
      </div>
    </div>
  </div>
</footer>
      {/* 7. Nút liên hệ nổi: Call, Zalo, Messenger */}
      <FloatingButtons />

    </div>
  );
}

export default App;