// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer'; // Import component Footer mới
import FloatingButtons from './components/FloatingButtons';
import ConsultationPopup from './components/ConsultationPopup';

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

      {/* 6. Chân trang (Footer): Gọi component đã được thiết kế sang trọng */}
      <Footer />

      {/* 7. Nút liên hệ nổi: Call, Zalo, Messenger, Top */}
      <FloatingButtons />

      {/* 8. Popup tư vấn tự động hiển thị sau khi load trang */}
      <ConsultationPopup />

    </div>
  );
}

export default App;