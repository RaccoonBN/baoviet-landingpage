import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Activity, Award, Star, HeartHandshake, ShieldCheck } from 'lucide-react';

const ProductDetailModal = ({ product, onClose }) => {
  if (!product) return null;
  const benefitIcons = [Activity, Award, Star, HeartHandshake, ShieldCheck];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6">
        {/* Backdrop */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose} className="absolute inset-0 bg-[#1B6FC8]/10 backdrop-blur-sm"
        />
        
        {/* Khung Modal */}
        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white rounded-[40px] w-full max-w-5xl overflow-hidden relative z-10 flex flex-col md:flex-row shadow-[0_20px_50px_rgba(27,111,200,0.15)] h-[90vh]"
        >
          {/* Banner Trái */}
          <div className="hidden md:flex w-[40%] relative overflow-hidden bg-[#1B6FC8]">
            <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: `url("${product.bgImage}")` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B6FC8] to-transparent" />
            <div className="relative z-10 mt-auto p-10 text-white">
              <h2 className="text-3xl font-bold mb-3">{product.title}</h2>
              <p className="text-blue-50 text-sm font-light leading-relaxed">{product.details.description}</p>
            </div>
          </div>

          {/* Nội dung phải */}
          <div className="flex-1 p-8 md:p-12 overflow-y-auto bg-[#E8F4FD]">
            <button onClick={onClose} className="absolute top-8 right-8 p-2 rounded-full bg-white hover:bg-slate-100 transition-colors shadow-sm">
              <X size={18} className="text-[#1B6FC8]"/>
            </button>

            <h3 className="text-xl font-bold text-[#1B6FC8] mb-8 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-[#3FA9F5] rounded-full"></div>
              Quyền lợi bảo vệ
            </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
  {product.details.benefits.slice(0, 6).map((benefit, i) => {
    // Tự động tách tiêu đề nếu có dấu ':' hoặc dùng 4 từ đầu làm tiêu đề
    const hasColon = benefit.includes(':');
    const title = hasColon ? benefit.split(':')[0] : benefit.split(' ').slice(0, 4).join(' ');
    const desc = hasColon ? benefit.split(':')[1] : benefit.split(' ').slice(4).join(' ');
    
    const Icon = benefitIcons[i % benefitIcons.length];
    
    return (
      <div key={i} className="group p-5 bg-white border border-[#E8F4FD] rounded-3xl hover:border-[#60C8FF]/30 hover:shadow-[0_10px_20px_rgba(27,111,200,0.08)] transition-all duration-300">
        {/* Icon với background đổi màu theo trạng thái hover */}
        <div className="w-12 h-12 rounded-2xl bg-[#E8F4FD] group-hover:bg-[#1B6FC8] flex items-center justify-center text-[#1B6FC8] group-hover:text-white mb-4 transition-colors duration-300">
          <Icon size={22} />
        </div>
        
        {/* Tiêu đề tách biệt giúp dễ đọc hơn */}
        <h5 className="font-bold text-[#0A1F3D] text-sm mb-2 leading-tight">
          {title}
        </h5>
        
        {/* Mô tả với màu sắc dịu hơn */}
        <p className="text-[12px] text-slate-500 leading-relaxed font-light">
          {desc || "Chi tiết quyền lợi bảo vệ chuyên sâu giúp bạn an tâm tuyệt đối trong mọi tình huống."}
        </p>
      </div>
    );
  })}
</div>

            {/* Bảng giá */}
            {product.details.hasTable && (
               <div className="mb-10">
                 <h4 className="font-bold text-[#1B6FC8] text-sm uppercase tracking-wider mb-4">Biểu phí tham khảo</h4>
                 <div className="bg-[#1B6FC8] rounded-3xl p-6 text-white text-xs shadow-lg">
                    <table className="w-full text-left">
                        <thead className="text-[#60C8FF]"><tr>{product.details.illustrationHeaders.map((h, i) => <th key={i} className="pb-4 font-normal">{h}</th>)}</tr></thead>
                        <tbody className="divide-y divide-[#3FA9F5]/30">
                            {product.details.illustrationRows.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j} className="py-3">{cell}</td>)}</tr>)}
                        </tbody>
                    </table>
                 </div>
               </div>
            )}

            {/* Nút bấm đã sửa màu (gradient xanh dịu hơn) */}
            <a 
              href="#register" 
              onClick={onClose} 
              className="block w-full py-5 bg-gradient-to-r from-[#1B6FC8] to-[#3FA9F5] text-white text-center font-bold text-sm uppercase tracking-widest rounded-2xl hover:shadow-xl hover:shadow-[#1B6FC8]/20 transition-all active:scale-[0.98]"
            >
              Đăng ký tư vấn ngay
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProductDetailModal;