// src/components/ProductCard.jsx
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ProductCard = ({ item, onClick }) => {
  const IconComponent = item.icon;

  // HỆ THỐNG MÀU PASTEL LUXURY: Tinh tế, nhẹ nhàng và đồng bộ
  const getBadgeStyle = (category) => {
    const text = category ? category.toLowerCase() : '';
    if (text.includes('sức khỏe')) {
      return 'bg-emerald-50 text-emerald-700 border-emerald-200/80';
    }
    if (text.includes('thai sản')) {
      return 'bg-rose-50 text-rose-600 border-rose-200/80';
    }
    if (text.includes('nhân thọ')) {
      return 'bg-blue-50 text-blue-700 border-blue-200/80';
    }
    if (text.includes('ô tô')) {
      return 'bg-amber-50 text-amber-700 border-amber-200/80';
    }
    if (text.includes('cháy nổ')) {
      return 'bg-red-50 text-red-600 border-red-200/80';
    }
    return 'bg-slate-50 text-slate-700 border-slate-200/80';
  };

  return (
    // RESPONSIVE CẤU HÌNH: Tự động co giãn mượt mà trên mọi khung hình thiết bị
    <div className="w-full sm:w-[340px] md:w-[360px] shrink-0 snap-start select-none">
      
      {/* KHUNG CARD CHÍNH: Nền trắng tinh khiết, viền sắc nét, hiệu ứng nâng khối 3D sang trọng khi hover */}
      <div 
        onClick={() => onClick(item)}
        className="group relative rounded-[32px] bg-white border border-slate-200/80 shadow-[0_4px_30px_rgba(0,0,0,0.02)] h-[490px] flex flex-col overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-2.5 hover:border-blue-500/40 hover:shadow-[0_24px_48px_rgba(10,31,61,0.1)]"
      >
        
        {/* ==================== PHẦN TRÊN: THÔNG TIN SÁNG SỦA (60%) ==================== */}
        <div className="p-6 md:p-8 flex-1 flex flex-col relative z-10">
          
          {/* Hàng đầu: Icon thương hiệu & Tagline danh mục */}
          <div className="flex items-center justify-between mb-6">
            {IconComponent && (
              <div className={`w-12 h-12 rounded-2xl ${item.iconColor || 'bg-blue-600'} text-white flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.06)] transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out`}>
                <IconComponent size={22} strokeWidth={2.2} />
              </div>
            )}
            
            <span className={`px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider border shadow-sm transition-all duration-300 group-hover:shadow-md ${getBadgeStyle(item.category)}`}>
              {item.category}
            </span>
          </div>

          {/* Tiêu đề gói sản phẩm: Đậm nét chữ Luxury, không bị nhòe */}
          <h3 className="text-xl md:text-2xl font-bold text-[#0A1F3D] tracking-tight leading-snug mb-2.5 transition-colors duration-300 group-hover:text-[#1B6FC8]">
            {item.title}
          </h3>

          {/* Giá tiền hoặc Trạng thái liên hệ */}
          {item.price ? (
            <div className="text-emerald-600 text-[13px] font-bold uppercase tracking-wider mb-4 flex items-center gap-1.5 animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              {item.price}
            </div>
          ) : (
            <div className="text-slate-400 text-[12px] font-semibold italic mb-4">
              Giá theo hạn mức lựa chọn
            </div>
          )}

          {/* Đoạn mô tả ngắn: Line-clamp giới hạn 3 dòng tinh tế */}
          <p className="text-slate-500 text-[13.5px] leading-relaxed line-clamp-3 font-medium transition-colors duration-300 group-hover:text-slate-600">
            {item.details?.description || "Chương trình bảo hiểm cao cấp với quyền lợi vượt trội, bảo vệ toàn diện cho bạn và gia đình."}
          </p>

          {/* Nút bấm hành động kiểu Modern Minimalist */}
          <div className="mt-auto pt-4 flex items-center gap-1.5 text-xs font-bold text-[#1B6FC8] uppercase tracking-[0.1em] transition-all duration-300 group-hover:gap-2.5">
            <span className="relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[#1B6FC8] after:transition-all after:duration-300 group-hover:after:w-full">
              Chi tiết quyền lợi
            </span>
            <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-[#1B6FC8] transition-all duration-300 group-hover:bg-[#1B6FC8] group-hover:text-white">
              <ArrowUpRight size={12} className="stroke-[2.5]" />
            </div>
          </div>
        </div>

        {/* ==================== PHẦN DƯỚI: KHỐI ẢNH ĐỒ HỌA NGHỆ THUẬT (40%) ==================== */}
        <div className="h-[170px] relative overflow-hidden mx-4 mb-4 rounded-[24px] border border-slate-200/60 shadow-[inner_0_2px_4px_rgba(0,0,0,0.05)]">
          {/* Ảnh minh họa với Motion zoom-in sâu khi tương tác */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[1500ms] ease-out group-hover:scale-110" 
            style={{ backgroundImage: `url("${item.bgImage}")` }}
          />
          {/* Lớp lụa chuyển màu mờ nhẹ đón ánh sáng từ trên khu vực thông tin xuống */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-40" />
        </div>

      </div>
    </div>
  );
};

export default ProductCard;