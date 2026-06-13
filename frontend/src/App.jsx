// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import ContactForm from './components/ContactForm';
import FloatingButtons from './components/FloatingButtons';
import ConsultationPopup from './components/ConsultationPopup'; // Thêm popup tư vấn
import { 
  FaFacebookF, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaShieldAlt,
  FaGlobe
} from 'react-icons/fa';

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
     {/* FOOTER: XANH SÁNG - HIỆN ĐẠI & RESPONSIVE */}
<footer className="bg-gradient-to-br from-[#1B6FC8] to-[#2596BE] text-white py-16 px-6 relative overflow-hidden">
  {/* Họa tiết trang trí chìm */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
  
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
    
    {/* Cột 1: Thương hiệu */}
    <div className="space-y-4">
      <h3 className="text-2xl font-bold font-lexend">BẢO VIỆT</h3>
      <p className="text-blue-50 text-sm leading-relaxed">
        Điểm tựa gia đình Việt. Chúng tôi cam kết mang đến giải pháp bảo vệ tài chính toàn diện và an tâm nhất cho tương lai của bạn.
      </p>
    </div>

    {/* Cột 2: Thông tin liên hệ */}
    <div className="space-y-4">
      <h4 className="font-bold text-lg uppercase tracking-wider mb-2 border-l-4 border-white pl-3">Liên hệ</h4>
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <FaMapMarkerAlt className="mt-1 shrink-0 text-white/80" />
          <span className="text-sm font-medium">84 Huỳnh Văn Bánh, Phường Cầu Kiệu, TP.HCM</span>
        </div>
        <div className="flex items-center gap-3">
          <FaEnvelope className="shrink-0 text-white/80" />
          <a href="mailto:cskh@baoviet-familycare.com.vn" className="text-sm font-medium hover:underline">
            cskh@baoviet-familycare.com.vn
          </a>
        </div>
      </div>
    </div>

    {/* Cột 3: Mạng xã hội */}
    <div className="flex flex-col md:items-end justify-between">
      <div className="text-left md:text-right">
        <h4 className="font-bold text-lg uppercase tracking-wider mb-4">Kết nối với chúng tôi</h4>
        <a href="#" className="inline-block p-4 bg-white/20 rounded-2xl hover:bg-white hover:text-[#1B6FC8] transition-all duration-300 shadow-lg group">
          <FaFacebookF size={32} className="transition-transform group-hover:scale-110" />
        </a>
      </div>
    </div>
  </div>

  {/* Bản quyền */}
  <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/20 text-center">
    <p className="text-xs uppercase tracking-[2px] opacity-70">
      © 2026 Bảo Hiểm Bảo Việt - Điểm Tựa Gia Đình Việt
    </p>
  </div>
</footer>

      {/* 7. Nút liên hệ nổi: Call, Zalo, Messenger, Top */}
      <FloatingButtons />

      {/* 8. Popup tư vấn tự động hiển thị sau khi load trang */}
      <ConsultationPopup />

    </div>
  );
}

export default App;