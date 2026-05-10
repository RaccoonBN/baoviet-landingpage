// src/components/Features.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartPulse, BadgeCheck, Users } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck size={28} />,
    title: "Uy tín hàng đầu",
    desc: "Thương hiệu Bảo hiểm quốc gia với hơn 60 năm đồng hành cùng người dân Việt Nam."
  },
  {
    icon: <HeartPulse size={28} />,
    title: "Bảo vệ toàn diện",
    desc: "Danh mục sản phẩm đa dạng từ sức khỏe, nhân thọ đến đầu tư tài chính tích lũy."
  },
  {
    icon: <BadgeCheck size={28} />,
    title: "Quyền lợi vượt trội",
    desc: "Chi trả bồi thường nhanh chóng, minh bạch với hạn mức bảo vệ cao nhất thị trường."
  },
  {
    icon: <Users size={28} />,
    title: "Tận tâm phục vụ",
    desc: "Mạng lưới tư vấn viên chuyên nghiệp, sẵn sàng hỗ trợ gia đình bạn 24/7."
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-28 bg-[#E8F4FD] overflow-hidden font-lexend">
      {/* Trang trí nền: Các vòng tròn mờ tạo chiều sâu Blue Ocean */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-bv-sky/10 rounded-full blur-[100px] -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-bv-bright/5 rounded-full blur-[120px] translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-vibes text-[#c38c00] text-3xl md:text-4xl mb-2"
          >
            Sự khác biệt từ tâm
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#00409a] text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Tại sao chọn Bảo Việt?
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-24 h-1 bg-gradient-to-r from-[#1B6FC8] to-[#E3C576] mx-auto rounded-full"
          ></motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/70 backdrop-blur-md border border-white p-8 rounded-[32px] shadow-[0_20px_50px_rgba(10,31,61,0.05)] hover:bg-[#0A1F3D] transition-all duration-500"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 mb-8 rounded-2xl bg-white shadow-inner flex items-center justify-center text-[#1B6FC8] group-hover:bg-[#1B6FC8] group-hover:text-white transition-all duration-500 border border-[#1B6FC8]/10 group-hover:border-transparent">
                <div className="relative z-10">
                  {f.icon}
                </div>
                {/* Glow effect on hover icon */}
                <div className="absolute inset-0 rounded-2xl bg-[#1B6FC8] opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-4 text-[#0A1F3D] group-hover:text-white transition-colors duration-500 tracking-tight">
                {f.title}
              </h3>
              <p className="text-gray-500 group-hover:text-white/70 transition-colors duration-500 text-sm leading-relaxed font-light">
                {f.desc}
              </p>

              {/* Phụ kiện: Số thứ tự mờ bên dưới góc card */}
              <span className="absolute bottom-6 right-8 text-6xl font-bold text-[#0A1F3D]/5 group-hover:text-white/5 transition-colors duration-500 pointer-events-none">
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}