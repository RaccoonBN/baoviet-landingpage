// src/components/Features.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartPulse, BadgeCheck, Users,Activity } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck size={22} />,
    title: "Quyền lợi nội trú",
    highlight: "454 triệu",
    unit: "vnđ/người/năm",
    desc: "Tổng số tiền người tham gia bảo hiểm được hưởng khi điều trị nội trú tại bệnh viện."
  },
  {
    icon: <HeartPulse size={22} />,
    title: "Hỗ trợ chi phí phẫu thuật",
    highlight: "200 triệu",
    unit: "vnđ/năm",
    desc: "Bảo hiểm sẽ thanh toán toàn bộ các chi phí hội chẩn, gây mê, hồi sức và phẫu thuật."
  },
  {
    icon: <BadgeCheck size={22} />,
    title: "Hỗ trợ chi phí nhập viện",
    highlight: "10 triệu",
    unit: "vnđ/ngày",
    desc: "Dịch vụ bảo lãnh viện phí ưu việt hoạt động 24/7 tại gần 200 bệnh viện chất lượng cao toàn quốc."
  },
{
    icon: <Activity size={22} />,
    title: "Chi trả 115 Bệnh lý nghiêm trọng",
    highlight: "115",
    unit: "Bệnh lý nghiêm trọng",
    desc: "Chi trả quỹ tài chính kịp thời giúp khách hàng an tâm điều trị và phục hồi trước 115 loại bệnh lý nguy hiểm."
  },
  
];

// Hiệu ứng xuất hiện tối giản, sử dụng cấu hình phần cứng mượt mà (Performance-First)
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] } // Cubic-bezier mượt mà cao cấp
  }
};

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-[#F4F8FC] overflow-hidden font-lexend">
      {/* Background Decor mờ siêu nhẹ, không gánh tài nguyên render */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1B6FC8]/3 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E3C576]/3 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section - Đúng chuẩn font phối hợp tinh tế trong hình image_b1fa4c.png */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="font-vibes text-[#B89B5E] text-4xl md:text-5xl mb-2 tracking-wide select-none">
            Chủ động trước mọi rủi ro
          </p>
          <h2 className="text-[#0A1F3D] text-3xl md:text-4xl font-semibold tracking-tight font-lexend">
            TẠI SAO NÊN MUA BẢO HIỂM?
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-[#1B6FC8] to-[#B89B5E] mx-auto mt-4 rounded-full" />
        </div>

        {/* Features Grid - Grid sạch sẽ, thẳng hàng tăm tắp */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -6 }}
              className="group relative bg-white border border-slate-100 p-8 rounded-[28px] shadow-[0_10px_30px_rgba(10,31,61,0.02)] hover:shadow-[0_20px_40px_rgba(10,31,61,0.05)] transition-all duration-300 ease-out overflow-hidden"
            >
              <div className="flex flex-col text-left relative z-10">
                
                {/* 1. Icon Box - Khóa cứng màu sắc, loại bỏ hoàn toàn lỗi cục vuông xanh lè khi hover */}
                <div className="w-11 h-11 mb-6 rounded-xl bg-[#F0F6FC] flex items-center justify-center border border-slate-100/60 text-[#1B6FC8] transition-colors duration-300">
                  <div className="group-hover:scale-105 transition-transform duration-300">
                    {f.icon}
                  </div>
                </div>

                {/* 2. Tiêu đề Quyền lợi - Khóa chiều cao cố định để chữ 1 dòng hay 2 dòng đều ko bị lệch hàng */}
                <div className="h-14 flex items-start mb-1">
                  <h3 className="text-[17px] font-semibold text-[#0A1F3D] tracking-tight font-lexend leading-snug">
                    {f.title}
                  </h3>
                </div>

                {/* 3. Khối số liệu tài chính - Font chữ vàng gold quý phái, độ dày vừa phải, đồng trục ngang */}
                <div className="h-16 flex flex-col justify-end mb-4">
                  <span className="text-slate-400 text-[10px] font-medium uppercase tracking-widest block mb-1.5">
                    Hạn mức lên đến
                  </span>
                  <div className="flex items-baseline flex-wrap gap-x-1">
                    <span className="text-2xl font-bold text-[#C29B41] tracking-tight font-lexend">
                      {f.highlight}
                    </span>
                    <span className="text-xs font-normal text-slate-400 font-lexend">
                      {f.unit}
                    </span>
                  </div>
                </div>

                {/* 4. Đoạn mô tả nội dung - Khóa độ cao tối thiểu để bảo toàn layout thẳng hàng */}
                <div className="min-h-[72px]">
                  <p className="text-slate-500/90 text-[13px] leading-relaxed font-light font-lexend">
                    {f.desc}
                  </p>
                </div>

              </div>

              {/* Số thứ tự lớn mờ nghệ thuật nằm ẩn tinh tế ở góc dưới bên phải */}
              <span className="absolute bottom-2 right-4 text-[80px] font-bold text-slate-100/50 pointer-events-none select-none font-lexend tracking-tighter leading-none z-0">
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}