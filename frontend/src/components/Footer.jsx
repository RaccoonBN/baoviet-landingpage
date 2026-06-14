import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1B6FC8] to-[#38BDF8] text-white py-10 md:py-12 px-6 relative overflow-hidden font-lexend">
      {/* Họa tiết Ambient Glow mờ ảo */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/20 rounded-full blur-[100px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#C5A059]/30 rounded-full blur-[80px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
        
       {/* Cột 1: Thương hiệu */}
<div className="space-y-4">
  {/* LOGO: Cắt vùng trắng thừa bằng cách bọc div và dùng object-position */}
  <div className="relative h-12 md:h-14 w-40 md:w-48 overflow-hidden flex items-center">
    <img 
      src="/assets/logo.svg" 
      alt="Bảo Việt Logo" 
      className="absolute inset-0 h-full w-full object-cover brightness-0 invert drop-shadow-md"
      // Thay đổi objectPosition nếu logo bị lệch, ví dụ '10% center' hoặc 'left center'
      style={{ objectPosition: '20% center' }} 
    />
  </div>
  
  <div className="space-y-2 pt-1">
    <p className="font-vibes text-[#FFDF8D] text-3xl md:text-4xl tracking-wider select-none drop-shadow-sm">
      Điểm tựa gia đình Việt
    </p>
    <p className="text-blue-50 text-[13px] md:text-[14px] leading-relaxed font-light pr-4">
      Chúng tôi cam kết mang đến giải pháp bảo vệ tài chính toàn diện và an tâm nhất cho tương lai của bạn cùng những người thân yêu.
    </p>
  </div>
</div>

        {/* Cột 2: Thông tin liên hệ */}
        <div className="space-y-4 md:pl-8">
          <h4 className="font-bold text-white text-[14px] md:text-[15px] uppercase tracking-widest relative">
            Thông tin liên hệ
            <div className="w-10 h-[2px] bg-[#FFDF8D] mt-2 md:mt-3" />
          </h4>
          
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-start gap-3 md:gap-4 group">
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white group-hover:bg-[#FFDF8D] group-hover:text-[#1B6FC8] transition-all duration-300 shrink-0 shadow-sm">
                <FaMapMarkerAlt size={12} className="md:text-[14px]" />
              </div>
              <span className="text-[13px] md:text-[14px] text-blue-50 font-medium leading-relaxed pt-1.5">
                84 Huỳnh Văn Bánh, Phường Cầu Kiệu, Phú Nhuận, TP.HCM
              </span>
            </div>
            
            <div className="flex items-center gap-3 md:gap-4 group">
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white group-hover:bg-[#FFDF8D] group-hover:text-[#1B6FC8] transition-all duration-300 shrink-0 shadow-sm">
                <FaEnvelope size={12} className="md:text-[14px]" />
              </div>
              <a href="mailto:cskh@baoviet-familycare.com.vn" className="text-[13px] md:text-[14px] text-blue-50 font-medium hover:text-[#FFDF8D] transition-colors break-all md:break-normal">
                cskh@baoviet-familycare.com.vn
              </a>
            </div>
          </div>
        </div>

        {/* Cột 3: Mạng xã hội */}
        <div className="flex flex-col md:items-end">
          <div className="text-left md:text-right w-full md:w-auto">
            <h4 className="font-bold text-white text-[14px] md:text-[15px] uppercase tracking-widest">
              Kết nối với chúng tôi
              <div className="w-10 h-[2px] bg-[#FFDF8D] mt-2 md:mt-3 mb-4 md:mb-6 md:ml-auto" />
            </h4>
            
            <a 
              href="#" 
              className="inline-flex w-12 h-12 md:w-14 md:h-14 items-center justify-center bg-white/20 border border-white/30 rounded-2xl hover:bg-white hover:-translate-y-1 transition-all duration-300 shadow-lg group"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} className="md:text-[22px] text-white group-hover:text-[#1B6FC8] transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Bản quyền */}
      <div className="max-w-6xl mx-auto mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/20 text-center relative z-10">
        <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.25em] text-blue-100 font-medium">
          © 2026 Bảo Hiểm Bảo Việt - Điểm tựa gia đình Việt
        </p>
      </div>
    </footer>
  );
}