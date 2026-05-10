// src/components/Products.jsx
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, HeartPulse, TrendingUp, ChevronRight, ChevronLeft, 
  CheckCircle2, Activity, UserPlus, FileText, Building2, ShieldAlert
} from 'lucide-react';

const products = [
  // --- 3 GÓI CHÍNH (HIỂN THỊ ĐẦU TIÊN) ---
  {
    id: 'ankhang',
    title: "An Khang Như Ý",
    price: "15.000đ",
    icon: <ShieldCheck size={32} className="text-[#1B6FC8]" />,
    features: ["Bảo vệ 37 bệnh lý nan y", "Hỗ trợ viện phí 2tr/ngày", "Chi trả lên đến 200% STBH"],
    color: "bg-blue-50"
  },
  {
    id: 'antam',
    title: "An Tâm Hoạch Định",
    price: "25.000đ",
    icon: <TrendingUp size={32} className="text-[#E3C576]" />,
    features: ["Lãi suất cam kết hấp dẫn", "Đầu tư an toàn từ Bảo Việt", "Linh hoạt rút tiền 24/7"],
    color: "bg-amber-50"
  },
  {
    id: 'suckhoe',
    title: "Chăm Sóc Y Tế (R26)",
    price: "5.000đ",
    icon: <HeartPulse size={32} className="text-emerald-500" />,
    features: ["Hạn mức nội trú 2 tỷ/năm", "Bảo lãnh viện phí toàn quốc", "Tùy chọn Thai sản & Nha khoa"],
    color: "bg-emerald-50"
  },
  // --- CÁC GÓI BỔ TRỢ THEO TÀI LIỆU ---
  {
    id: 'nany',
    title: "Bệnh Lý Nan Y (R21/R25)",
    price: "3.000đ",
    icon: <Activity size={32} className="text-red-500" />,
    features: ["Chi trả ngay khi chẩn đoán", "Hỗ trợ ung thư giai đoạn đầu", "Bảo vệ toàn diện đến 65 tuổi"],
    color: "bg-red-50"
  },
  {
    id: 'tainan',
    title: "Tai Nạn Toàn Diện (R22/R23)",
    price: "2.000đ",
    icon: <ShieldAlert size={32} className="text-orange-500" />,
    features: ["Thương tật bộ phận vĩnh viễn", "Hỗ trợ chi phí cấp cứu", "Bảo vệ 24/7 toàn cầu"],
    color: "bg-orange-50"
  },
  {
    id: 'hotrophi',
    title: "Hỗ Trợ Đóng Phí (R24/27/28)",
    price: "1.000đ",
    icon: <FileText size={32} className="text-purple-500" />,
    features: ["Miễn đóng phí khi gặp rủi ro", "Duy trì hiệu lực hợp đồng", "Áp dụng cho cả người thân"],
    color: "bg-purple-50"
  },
  {
    id: 'doanhnghiep',
    title: "Bảo hiểm Doanh nghiệp",
    price: "Tùy theo quy mô",
    icon: <Building2 size={32} className="text-indigo-600" />,
    features: ["Bảo vệ nguồn nhân lực cốt lõi", "Gói phúc lợi nhân viên VIP", "Tối ưu chi phí vận hành"],
    color: "bg-indigo-50",
    isScalable: true
  }
];

const infiniteProducts = [...products, ...products, ...products];

export default function Products() {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 420; 
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScrollLoop = () => {
      const container = containerRef.current;
      if (!container) return;
      const totalWidth = products.length * 412;
      if (container.scrollLeft >= totalWidth * 2) {
        container.scrollLeft = totalWidth;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft = totalWidth;
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScrollLoop);
      container.scrollLeft = products.length * 412;
    }
    return () => container?.removeEventListener('scroll', handleScrollLoop);
  }, []);

  return (
    <section id="products" className="relative py-28 bg-[#E8F4FD] overflow-hidden font-lexend">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="font-vibes text-[#c38c00] text-4xl mb-2">Sự lựa chọn tin cậy</p>
          <h2 className="text-[#00409a] text-3xl md:text-5xl font-bold tracking-tight uppercase">
            Giải pháp bảo hiểm toàn diện
          </h2>
        </div>

        <div className="relative group">
          {/* Controls */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 w-14 h-14 bg-white shadow-2xl rounded-full flex items-center justify-center text-[#0A1F3D] hover:bg-[#1B6FC8] hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
          >
            <ChevronLeft size={28} />
          </button>

          <div 
            ref={containerRef}
            className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory px-4 py-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {infiniteProducts.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -15 }}
                className="min-w-[320px] md:min-w-[380px] snap-center"
              >
                <div className="bg-white rounded-[45px] p-8 shadow-[0_20px_60px_rgba(27,111,200,0.08)] border border-white/60 relative flex flex-col h-full">
                  {/* Price Badge */}
                  <div className="absolute top-8 right-8 bg-[#E3C576]/10 px-4 py-1.5 rounded-full border border-[#E3C576]/20">
                    <span className="text-[#B89B5E] text-[10px] font-bold uppercase tracking-widest">
                      {item.isScalable ? "" : "Chỉ từ "}
                      <span className={item.isScalable ? "text-xs capitalize" : "text-lg uppercase"}>
                        {item.price}
                      </span>
                      {item.isScalable ? "" : "/ngày"}
                    </span>
                  </div>

                  <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-8 shadow-sm`}>
                    {item.icon}
                  </div>

                  <h3 className="text-[#0A1F3D] text-2xl font-bold mb-6 font-cabin leading-tight">
                    {item.title}
                  </h3>

                  <div className="space-y-4 mb-10 flex-grow">
                    {item.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-[#1B6FC8] mt-0.5 shrink-0" />
                        <span className="text-gray-600 text-sm font-medium leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full py-4 bg-[#0A1F3D] hover:bg-[#1B6FC8] text-white rounded-2xl font-bold text-sm transition-all duration-300 shadow-lg shadow-blue-900/10 active:scale-95 group/btn flex items-center justify-center gap-2">
                    Tìm hiểu chi tiết
                    <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 w-14 h-14 bg-white shadow-2xl rounded-full flex items-center justify-center text-[#0A1F3D] hover:bg-[#1B6FC8] hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}} />
    </section>
  );
}