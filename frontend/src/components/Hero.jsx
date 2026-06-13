// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';

export default function Hero() {
  // Cấu hình hiệu ứng trượt xuất hiện khi cuộn/hiển thị chung cho các khối chữ
  const scrollRevealVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease: [0.215, 0.610, 0.355, 1.000] } // Tạo độ mượt dạng lướt êm (cubic-bezier)
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[750px] flex items-center overflow-hidden font-lexend bg-[#0A1F3D]">
      {/* 1. Background với lớp phủ chuyên nghiệp */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/family-banner.jpg" 
          alt="Gia đình hạnh phúc" 
          className="w-full h-full object-cover scale-105" 
        />
        {/* Lớp phủ Gradient: Chuyển từ hải quân đậm sang trong suốt */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B6FC8]/95 via-[#0A1F3D]/60 to-transparent"></div>
      </div>

      {/* 2. Nội dung - pt-32 để đảm bảo không dính Navbar */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-32">
        <div className="max-w-4xl">
          
          {/* Tagline nhỏ - Màu vàng Champagne thanh thoát */}
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-vibes text-[#E3C576] text-4xl md:text-5xl mb-4"
          >
            Vững tâm cho tương lai
          </motion.p>
          
          {/* Tiêu đề chính: Hiệu ứng trượt lướt khi xuất hiện */}
          <motion.h1 
            variants={scrollRevealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6"
          >
            Bảo Hiểm Bảo Việt
          </motion.h1>

          {/* Slogan phối chữ: Kéo xuất hiện mượt mà theo dòng cuộn */}
          <motion.h2
            variants={scrollRevealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="flex flex-wrap items-center gap-x-3 text-base md:text-xl font-extralight tracking-[0.4em] text-white/70 uppercase mb-10"
          >
            <span>Điểm tựa</span>
            <span className="font-bold text-white tracking-widest">vững chắc</span>
            <span>cho mọi</span>
            <span className="font-vibes text-[#E3C576] lowercase text-4xl md:text-5xl tracking-normal normal-case opacity-90 translate-y-1">
              thế hệ
            </span>
          </motion.h2>

          {/* Mô tả ngắn - Xuất hiện chậm hơn một nhịp tạo độ sâu (Stagger hiệu ứng) */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-white/60 mb-12 max-w-lg font-light text-sm md:text-base leading-relaxed border-l border-[#E3C576]/30 pl-6"
          >
            Giải pháp tài chính thông minh giúp bạn bảo vệ những người thân yêu và xây dựng nền tảng vững vàng cho muôn đời sau.
          </motion.p>
          
          {/* 3. Nhóm Button xuất hiện cuối cùng đồng bộ */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            {/* Nút Đăng ký */}
            <a 
              href="#register" 
              className="group bg-[#1B6FC8] hover:bg-[#3FA9F5] text-white px-7 py-3 rounded-full font-bold transition-all duration-500 shadow-lg flex items-center justify-center gap-2 border border-transparent"
            >
              <span className="tracking-wider text-xs uppercase">Đăng ký tư vấn</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Nút Khám phá */}
            <a 
              href="#products" 
              className="group bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-3 rounded-full font-semibold transition-all duration-500 flex items-center justify-center gap-3"
            >
              <Play size={14} fill="currentColor" className="text-[#60C8FF] group-hover:scale-110 transition-transform" />
              <span className="text-xs uppercase tracking-wider">Khám phá sản phẩm</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}