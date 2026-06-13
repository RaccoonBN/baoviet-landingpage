// src/components/Products.jsx
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal';
import { productsData } from './data'; // Đã import chuẩn biến này

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const containerRef = useRef(null);

  // LOGIC SCROLL HỒ TRỢ CLICK NÚT
  const scroll = (direction) => {
    if (containerRef.current) {
      const { current } = containerRef;
      const scrollAmount = 390; // Khớp chuẩn theo độ rộng của Card + Gap
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  // LOGIC AUTO-SCROLL (Tự động chạy mượt mà)
  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        const { current } = containerRef;
        if (current.scrollLeft + current.offsetWidth >= current.scrollWidth - 10) {
          current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          current.scrollBy({ left: 390, behavior: 'smooth' });
        }
      }
    }, 4000); // 4 giây trượt một lần cho khách kịp đọc thông tin
    return () => clearInterval(interval);
  }, []);

  return (
   <section id="products" className="py-24 bg-white relative font-lexend">
  <div className="max-w-7xl mx-auto px-4">
    
    {/* TIÊU ĐỀ KHỐI - PHỐI HỢP TINH TẾ */}
    <div className="max-w-3xl mx-auto text-center mb-20">
      <p className="font-vibes text-[#B89B5E] text-4xl md:text-5xl mb-2 tracking-wide select-none">
        Giải pháp toàn diện
      </p>
      <h2 className="text-[#0A1F3D] text-3xl md:text-4xl font-semibold tracking-tight">
        BẢO VỆ GIA ĐÌNH VÀ NGƯỜI THÂN
      </h2>
      <div className="w-12 h-[2px] bg-gradient-to-r from-[#1B6FC8] to-[#B89B5E] mx-auto mt-4 rounded-full" />
    </div>

        {/* Nút điều hướng và Slider */}
        <div className="relative group/slider">
          {/* Nút điều hướng bên Trái */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/60 text-[#0A1F3D] shadow-md flex items-center justify-center opacity-0 group-hover/slider:opacity-100 md:group-hover/slider:left-[-22px] transition-all duration-300 hover:bg-[#1B6FC8] hover:text-white hover:border-transparent active:scale-95"
            aria-label="Scroll Left"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Nút điều hướng bên Phải */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/60 text-[#0A1F3D] shadow-md flex items-center justify-center opacity-0 group-hover/slider:opacity-100 md:group-hover/slider:right-[-22px] transition-all duration-300 hover:bg-[#1B6FC8] hover:text-white hover:border-transparent active:scale-95"
            aria-label="Scroll Right"
          >
            <ChevronRight size={20} />
          </button>
          
          {/* Vùng hiển thị Card: Thiết lập mượt mà, ẩn thanh scrollbar */}
          <div 
            ref={containerRef} 
            className="flex gap-6 overflow-x-auto snap-x no-scrollbar pb-6 pt-2 px-2 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* ĐÃ SỬA CHỖ NÀY: Đổi từ insuranceProducts sang productsData */}
            {productsData.map((item) => (
              <ProductCard key={item.id} item={item} onClick={setSelectedProduct} />
            ))}
          </div>
        </div>
      </div>

      {/* Modal chi tiết quyền lợi */}
      <ProductDetailModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  );
};

export default Products;