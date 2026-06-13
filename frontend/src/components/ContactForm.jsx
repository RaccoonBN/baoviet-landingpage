import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Send, Phone, Mail, MapPin, User, AlertCircle, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); 
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    gender: 'Nam',
    birthDate: '',
    email: '',
    interests: ['Chăm sóc Sức khỏe']
  });

  const interestOptions = [
    "Chăm sóc Sức khỏe",
    "Bảo vệ toàn diện",
    "Bảo hiểm thai sản",
    "Đầu tư tích lũy",
    "Bảo hiểm Ô tô",
    "Bảo hiểm cháy nổ"
  ];

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleToggleInterest = (option) => {
    setFormData(prev => {
      const current = prev.interests;
      const updated = current.includes(option)
        ? current.filter(item => item !== option)
        : [...current, option];
      return { ...prev, interests: updated };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.interests.length === 0) {
      alert("Vui lòng chọn ít nhất một gói giải pháp bạn quan tâm!");
      return;
    }
    setStatus('loading');
    
    const GOOGLE_SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbxlZSJyx-7NotNaIEJ9BKz4CfvSvIkxyOvJfmzVlniAk71yjn3QW33-WoYYa7sQ3pgM/exec";

    try {
      await axios.post(GOOGLE_SHEET_WEBHOOK_URL, JSON.stringify(formData), {
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      });
      
      setStatus('idle');
      setShowToast(true);
      
      setFormData({
        fullName: '',
        phoneNumber: '',
        gender: 'Nam',
        birthDate: '',
        email: '',
        interests: ['Chăm sóc Sức khỏe']
      });
    } catch (error) {
      console.error(error);
      alert("Lỗi kết nối bộ nhận dữ liệu Google Sheet!");
      setStatus('idle');
    }
  };

  return (
    <section id="register" className="py-12 bg-slate-50 relative overflow-hidden font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Lexend+Deca:wght@300;400;500;600;700&display=swap');
        .font-lexend { font-family: 'Lexend Deca', sans-serif; }
        .font-vibes { font-family: 'Great Vibes', cursive; }
      `}</style>

      {/* POPUP THÔNG BÁO ALERT */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-6 right-6 z-50 flex items-center gap-3 bg-slate-900 text-white px-5 py-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] max-w-md border border-slate-800 font-lexend"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <Check size={16} strokeWidth={3} />
            </div>
            <div className="flex-1 pr-2">
              <h4 className="text-xs font-bold text-white tracking-wide uppercase">Đăng ký thành công</h4>
              <p className="text-[11px] text-slate-400 font-light mt-0.5 leading-relaxed">Chuyên viên tư vấn sẽ nhanh chóng liên hệ với bạn!</p>
            </div>
            <button 
              onClick={() => setShowToast(false)}
              className="text-slate-500 hover:text-white transition-colors cursor-pointer p-1"
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-white rounded-[24px] shadow-[0_20px_50px_rgba(15,23,42,0.04)] flex flex-col md:flex-row overflow-hidden border border-slate-100">
          
          {/* CỘT TRÁI: THÔNG TIN CỐ ĐỊNH BẢO VIỆT (ĐÃ UPDATE CHỮ TO HƠN, XÓA TEXT THỪA PHÍA TRÊN) */}
          <div 
            className="md:w-[30%] bg-cover bg-center p-6 text-white flex flex-col justify-end relative min-h-[280px] md:min-h-auto"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#2E6CC4]/40 via-[#1E53A3]/85 to-[#0D264F]/98 z-0" />
            
            <div className="relative z-10 space-y-5 font-lexend">
              <div>
                {/* Đã xóa text nhỏ 'baoviet care' thừa ở đây */}
                <h3 className="text-base md:text-lg font-bold tracking-wider text-white uppercase opacity-100 leading-snug">
                  BẢO HIỂM BẢO VIỆT
                </h3>
                <p className="text-sky-200/90 text-xs mt-1.5 font-light tracking-wide">An tâm vững bước, gửi trọn niềm tin</p>
              </div>

              <div className="w-12 h-[1px] bg-[#E3C576]/50" />

              <div className="space-y-3.5 text-slate-100/90 text-xs">
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-[#E3C576] shrink-0 mt-0.5">
                    <Phone size={13} />
                  </div>
                  <div>
                    <p className="text-[8px] text-sky-200/60 uppercase font-medium tracking-widest mb-0.5">Hotline hỗ trợ 24/7</p>
                    <a href="tel:0907135090" className="text-xs font-semibold text-white hover:text-[#E3C576] transition-colors">0907 135 090</a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-sky-200 shrink-0 mt-0.5">
                    <Mail size={13} />
                  </div>
                  <div>
                    <p className="text-[8px] text-sky-200/60 uppercase font-medium tracking-widest mb-0.5">Email liên hệ</p>
                    <a href="mailto:cskh@baoviet-familycare.com.vn" className="text-[11px] font-light text-slate-200 hover:text-[#E3C576] break-all">cskh@baoviet-familycare.com.vn</a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-sky-200 shrink-0 mt-0.5">
                    <MapPin size={13} />
                  </div>
                  <div>
                    <p className="text-[8px] text-sky-200/60 uppercase font-medium tracking-widest mb-0.5">Địa chỉ văn phòng</p>
                    <p className="text-[11px] font-light text-slate-200/90 leading-relaxed">84 Huỳnh Văn Bánh, Phường Cầu Kiệu, TP.HCM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CỘT PHẢI: KHU VỰC BIỂU MẪU (ĐÃ FIX LỖI CẮT CHỮ NGHỆ THUẬT) */}
          <div className="md:w-[70%] p-6 md:p-8 lg:p-9 bg-white flex flex-col justify-center font-lexend">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
  {/* Thay block bằng inline-block, thêm px-2 và overflow-visible để font chữ bay bướm không bị cắt rìa */}
  <span className="font-vibes text-4xl inline-block leading-normal px-2 pb-1 overflow-visible font-semibold bg-gradient-to-r from-[#1E53A3] via-[#2E6CC4] to-[#D4AF37] bg-clip-text text-transparent">
    Hoàn toàn miễn phí
  </span>
  <h3 className="text-xl font-bold text-slate-800 tracking-tight mt-0.5">
    ĐĂNG KÝ TƯ VẤN
  </h3>
</div>
                <div className="flex items-center gap-2 bg-amber-50 border border-amber-200/60 px-3 py-1.5 rounded-xl text-amber-900 text-[11px] max-w-max self-start sm:self-center">
                  <AlertCircle size={13} className="text-amber-600 shrink-0" />
                  <span><strong className="font-semibold">Lưu ý:</strong> Trẻ em dưới 6 tuổi cần mua kèm 1 người lớn.</span>
                </div>
              </div>

              <div className="space-y-4">
                {/* HÀNG 1: HỌ VÀ TÊN & NGÀY SINH */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                  <div className="sm:col-span-8 space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-0.5">Họ và tên khách hàng</label>
                    <div className="relative">
                      <input 
                        required type="text" placeholder="Nguyễn Văn A"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-900 focus:border-[#2E6CC4] focus:ring-4 focus:ring-blue-500/5 outline-none transition-all"
                        value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      />
                      <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    </div>
                  </div>

                  <div className="sm:col-span-4 space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-0.5">Ngày sinh</label>
                    <input 
                      required type="date"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 focus:border-[#2E6CC4] outline-none transition-all cursor-pointer"
                      value={formData.birthDate} onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
                    />
                  </div>
                </div>

                {/* HÀNG 2: GIỚI TÍNH, SỐ ĐIỆN THOẠI & EMAIL */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                  <div className="sm:col-span-3 space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-0.5">Giới tính</label>
                    <div className="grid grid-cols-2 gap-1 bg-slate-100 p-1 rounded-xl h-[42px] items-center">
                      {['Nam', 'Nữ'].map((g) => (
                        <button
                          key={g} type="button"
                          onClick={() => setFormData({...formData, gender: g})}
                          className={`py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${formData.gender === g ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-500 hover:text-slate-800'}`}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="sm:col-span-4 space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-0.5">Số điện thoại</label>
                    <input 
                      required type="tel" placeholder="09xx xxx xxx"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-900 focus:border-[#2E6CC4] focus:ring-4 focus:ring-blue-500/5 outline-none transition-all"
                      value={formData.phoneNumber} onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                    />
                  </div>

                  <div className="sm:col-span-5 space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-0.5">Địa chỉ Email</label>
                    <input 
                      required type="email" placeholder="name@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-900 focus:border-[#2E6CC4] focus:ring-4 focus:ring-blue-500/5 outline-none transition-all"
                      value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                {/* HÀNG 3: DANH SÁCH CHECKBOX */}
                <div className="space-y-2 pt-2 border-t border-slate-50">
                  <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-wider">
                    <span className="text-slate-400">Gói giải pháp quan tâm (Có thể chọn nhiều)</span>
                    <span className="text-[#2E6CC4] normal-case text-xs">
                      Đã chọn: <strong className="font-bold">{formData.interests.length}</strong>
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {interestOptions.map((option, idx) => {
                      const isSelected = formData.interests.includes(option);
                      return (
                        <div 
                          key={idx} onClick={() => handleToggleInterest(option)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-150 cursor-pointer select-none
                            ${isSelected 
                              ? 'border-[#2E6CC4]/70 bg-blue-50/30' 
                              : 'border-slate-200 bg-white hover:bg-slate-50/80'
                            }`}
                        >
                          <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all shrink-0
                            ${isSelected ? 'border-[#2E6CC4] bg-[#2E6CC4] text-white' : 'border-slate-300 bg-white'}`}
                          >
                            {isSelected && <Check size={11} strokeWidth={3} />}
                          </div>
                          <span className={`text-xs font-medium transition-colors ${isSelected ? 'text-slate-900 font-semibold' : 'text-slate-600'}`}>
                            {option}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

             {/* NÚT BẤM GỬI FORM */}
<div className="pt-2">
  <motion.button 
    whileHover={{ y: -2 }} 
    whileTap={{ scale: 0.98 }} 
    disabled={status === 'loading'}
    className="relative w-full py-5 bg-gradient-to-r from-[#1B6FC8] to-[#3FA9F5] text-white font-bold text-sm uppercase tracking-widest rounded-2xl shadow-xl shadow-[#1B6FC8]/20 hover:shadow-2xl hover:shadow-[#1B6FC8]/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden group"
  >
    {/* Hiệu ứng overlay sáng khi hover */}
    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    
    <span className="relative flex items-center justify-center gap-2">
      {status === 'loading' ? (
        'ĐANG XỬ LÝ HỆ THỐNG...'
      ) : (
        <>
          ĐĂNG KÝ TƯ VẤN MIỄN PHÍ 
          <Send size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
        </>
      )}
    </span>
  </motion.button>
</div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}