import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { X, Send, CheckCircle2, ShieldAlert, Check, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ConsultationPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    gender: 'Nam',
    birthDate: '',
    email: '',
    interests: ['Chăm sóc Sức khỏe'] // Đổi tên từ packages sang interests
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
    const timer = setTimeout(() => setIsOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleToggleInterest = (option) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(option)
        ? prev.interests.filter(i => i !== option)
        : [...prev.interests, option]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.interests.length === 0) {
      alert("Vui lòng chọn ít nhất một gói giải pháp!");
      return;
    }
    setStatus('loading');
    
    // Sử dụng URL webhook tương tự ContactForm
    const GOOGLE_SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbxlZSJyx-7NotNaIEJ9BKz4CfvSvIkxyOvJfmzVlniAk71yjn3QW33-WoYYa7sQ3pgM/exec";
    
    try {
      await axios.post(GOOGLE_SHEET_WEBHOOK_URL, JSON.stringify(formData), {
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      });
      setStatus('success');
      setTimeout(() => setIsOpen(false), 2000);
    } catch (error) {
      console.error(error);
      alert("Có lỗi xảy ra, vui lòng thử lại!");
      setStatus('idle');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)} className="fixed inset-0 bg-[#0A1F3D]/60 backdrop-blur-sm" />

          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white w-full max-w-lg rounded-[32px] shadow-2xl overflow-hidden relative z-10"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-5 right-5 p-2 bg-black/5 rounded-full hover:bg-black/10 transition-colors z-20">
              <X size={18} />
            </button>

            <div className="bg-gradient-to-r from-[#2E6CC4] to-[#1E53A3] p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">Đăng ký tư vấn</h3>
              <p className="text-blue-100 text-xs">Để lại thông tin, chuyên viên sẽ liên hệ với bạn ngay.</p>
            </div>

            <div className="p-8">
              {status === 'success' ? (
                <div className="text-center py-10">
                  <CheckCircle2 size={48} className="mx-auto text-emerald-500 mb-4" />
                  <h4 className="text-lg font-bold text-slate-800">Gửi thông tin thành công!</h4>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-8 space-y-1">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Họ và tên</label>
                      <input required type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#2E6CC4] outline-none"
                        value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
                    </div>
                    <div className="col-span-4 space-y-1">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Ngày sinh</label>
                      <input required type="date" className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#2E6CC4] outline-none"
                        value={formData.birthDate} onChange={(e) => setFormData({...formData, birthDate: e.target.value})} />
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-4 space-y-1">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Giới tính</label>
                      <select className="w-full px-2 py-2.5 rounded-xl border border-slate-200 text-sm" value={formData.gender} onChange={(e) => setFormData({...formData, gender: e.target.value})}>
                        <option>Nam</option><option>Nữ</option>
                      </select>
                    </div>
                    <div className="col-span-8 space-y-1">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Số điện thoại</label>
                      <input required type="tel" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#2E6CC4] outline-none"
                        value={formData.phoneNumber} onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})} />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-slate-400">Email</label>
                    <input required type="email" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#2E6CC4] outline-none"
                      value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-slate-400">Gói quan tâm (có thể chọn nhiều)</label>
                    <div className="grid grid-cols-2 gap-2">
                      {interestOptions.map(opt => (
                        <button key={opt} type="button" onClick={() => handleToggleInterest(opt)}
                          className={`text-[11px] py-2 rounded-lg border ${formData.interests.includes(opt) ? 'border-[#2E6CC4] bg-blue-50 text-[#2E6CC4]' : 'border-slate-200'}`}>
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button type="submit" disabled={status === 'loading'}
                                  className="block w-full py-5 bg-gradient-to-r from-[#1B6FC8] to-[#3FA9F5] text-white text-center font-bold text-sm uppercase tracking-widest rounded-2xl hover:shadow-xl hover:shadow-[#1B6FC8]/20 transition-all active:scale-[0.98]">
                    {status === 'loading' ? 'ĐANG GỬI...' : 'ĐĂNG KÝ TƯ VẤN'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}