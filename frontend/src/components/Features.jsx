import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartPulse, BadgeCheck, Activity } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck size={26} strokeWidth={1.5} />,
    title: "Quyền lợi nội trú",
    highlight: "454 triệu",
    unit: "vnđ/người/năm",
    desc: "Tổng số tiền người tham gia bảo hiểm được hưởng khi điều trị nội trú tại bệnh viện."
  },
  {
    icon: <HeartPulse size={26} strokeWidth={1.5} />,
    title: "Hỗ trợ phẫu thuật",
    highlight: "200 triệu",
    unit: "vnđ/năm",
    desc: "Thanh toán toàn bộ các chi phí hội chẩn, gây mê, hồi sức và phẫu thuật y khoa."
  },
  {
    icon: <BadgeCheck size={26} strokeWidth={1.5} />,
    title: "Hỗ trợ nhập viện",
    highlight: "10 triệu",
    unit: "vnđ/ngày",
    desc: "Dịch vụ bảo lãnh viện phí ưu việt hoạt động 24/7 tại gần 200 bệnh viện cao cấp."
  },
  {
    icon: <Activity size={26} strokeWidth={1.5} />,
    title: "115 Bệnh lý nghiêm trọng",
    highlight: "115",
    unit: "loại bệnh lý",
    desc: "Chi trả quỹ tài chính kịp thời giúp khách hàng an tâm điều trị và phục hồi."
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Features() {
  return (
    <section id="features" className="relative py-16 md:py-24 bg-[#FAFCFF] overflow-hidden font-lexend">
      {/* Nền mờ Ambient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-50/40 rounded-full blur-[120px] translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - Đã thu hẹp khoảng cách bottom (mb-12 thay vì mb-24) */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <p className="font-vibes text-[#B89B5E] text-4xl md:text-5xl mb-3 tracking-wide select-none drop-shadow-sm">
            Chủ động trước mọi rủi ro
          </p>
          <h2 className="text-[#0A1F3D] text-3xl md:text-[36px] lg:text-[40px] font-bold tracking-tight leading-tight">
            TẠI SAO NÊN MUA BẢO HIỂM?
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto mt-6 opacity-80" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -8 }}
              className="group relative bg-white/80 backdrop-blur-sm border border-slate-100/60 p-7 lg:p-9 rounded-[32px] shadow-[0_8px_30px_-10px_rgba(27,111,200,0.06)] hover:shadow-[0_20px_50px_-15px_rgba(27,111,200,0.1)] hover:bg-white transition-all duration-500 ease-out flex flex-col overflow-hidden"
            >
              <div className="flex flex-col h-full relative z-10">
                
                {/* 1. Icon Box */}
                <div className="w-14 h-14 mb-7 rounded-[18px] bg-blue-50/60 border border-blue-100/50 flex items-center justify-center text-[#1B6FC8] group-hover:bg-[#1B6FC8] group-hover:text-white transition-all duration-500">
                  <div className="group-hover:scale-110 transition-transform duration-500 ease-out">
                    {f.icon}
                  </div>
                </div>

                {/* 2. Tiêu đề - Khóa cứng chiều cao (min-h-[56px]) để chống lệch dòng */}
                <div className="min-h-[56px] mb-2 flex items-start">
                  <h3 className="text-[18px] md:text-[20px] font-bold text-[#0A1F3D] tracking-tight leading-snug line-clamp-2">
                    {f.title}
                  </h3>
                </div>

                {/* 3. Khối số liệu - Ép đơn vị xuống dòng đồng loạt bằng flex-col */}
                <div className="mb-6">
                  <span className="text-slate-400 text-[10px] font-semibold uppercase tracking-[0.15em] block mb-2">
                    Hạn mức lên đến
                  </span>
                  <div className="flex flex-col gap-y-0.5">
                    <span className="text-3xl lg:text-[34px] font-black bg-gradient-to-r from-[#C5A059] to-[#E3C576] bg-clip-text text-transparent tracking-tight leading-none pb-1">
                      {f.highlight}
                    </span>
                    <span className="text-[13px] font-medium text-slate-500">
                      {f.unit}
                    </span>
                  </div>
                </div>

                {/* 4. Đoạn mô tả - Căn dưới cùng */}
                <div className="mt-auto pt-4 border-t border-slate-50">
                  <p className="text-slate-500 text-[13px] md:text-[14px] leading-relaxed font-light">
                    {f.desc}
                  </p>
                </div>

              </div>

              {/* Watermark */}
              <span className="absolute -bottom-5 -right-3 text-[100px] font-black text-slate-50/80 group-hover:text-[#F4F8FC] pointer-events-none select-none tracking-tighter leading-none z-0 transition-colors duration-500">
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}