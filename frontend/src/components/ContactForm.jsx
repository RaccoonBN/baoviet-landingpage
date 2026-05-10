// src/components/ContactForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Send, CheckCircle, PhoneCall, ShieldCheck, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle, loading, success
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    product: 'An Khang Như Ý'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      // Endpoint API đã cấu hình trên Render
      await axios.post('https://baoviet-backend.onrender.com/api/register', formData);
      setStatus('success');
      setFormData({ fullName: '', phoneNumber: '', product: 'An Khang Như Ý' });
    } catch (error) {
      console.error(error);
      alert("Có lỗi xảy ra, vui lòng thử lại sau hoặc liên hệ trực tiếp hotline!");
      setStatus('idle');
    }
  };

  const productOptions = [
    "An Khang Như Ý",
    "An Tâm Hoạch Định",
    "Chăm Sóc Y Tế (R26)",
    "Bệnh Lý Nan Y (R21/R25)",
    "Tai Nạn Toàn Diện (R22/R23)",
    "Hỗ Trợ Đóng Phí (R24/27/28)",
    "Bảo hiểm Doanh nghiệp",
    "Cần tư vấn tất cả"
  ];

  return (
    <section id="register" className="py-24 bg-[#E8F4FD] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/40 rounded-full blur-[120px] -z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto bg-white rounded-[40px] shadow-[0_30px_100px_rgba(10,31,61,0.1)] flex flex-col md:flex-row overflow-hidden border border-white">
          
          {/* Cột trái: Brand Message */}
          <div className="md:w-5/12 bg-[#0A1F3D] p-10 md:p-16 text-white flex flex-col justify-between">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[#E3C576] text-xs font-bold uppercase tracking-widest mb-8"
              >
                <ShieldCheck size={14} /> Tư vấn chuyên nghiệp
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 font-cabin leading-tight">
                An Tâm <br /> 
                <span className="text-[#E3C576] italic font-light">Gửi Trọn Niềm Tin</span>
              </h2>
              
              <p className="text-white/60 mb-12 leading-relaxed text-lg">
                Để lại thông tin để nhận lộ trình bảo vệ được thiết kế riêng cho gia đình bạn.
              </p>

              <div className="space-y-6">
                {[
                  { icon: <Clock size={20}/>, text: "Hỗ trợ tận tâm 24/7" },
                  { icon: <ShieldCheck size={20}/>, text: "Bảo mật thông tin tuyệt đối" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-white/90">
                    <div className="w-10 h-10 rounded-xl bg-[#1B6FC8]/20 flex items-center justify-center text-[#E3C576]">
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cột phải: Form */}
          <div className="md:w-7/12 p-10 md:p-16 bg-white">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center py-10"
                >
                  <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500 mb-8 shadow-inner">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-3xl font-bold text-[#0A1F3D] mb-4 font-cabin">Đăng Ký Thành Công!</h3>
                  <p className="text-gray-500 max-w-sm mb-10 leading-relaxed">
                    Cảm ơn bạn đã tin tưởng Bảo Việt. Chuyên viên tư vấn sẽ liên hệ với bạn qua số điện thoại 
                    <span className="font-bold text-[#0A1F3D]"> {formData.phoneNumber}</span> sớm nhất.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="px-8 py-4 bg-[#E8F4FD] text-[#1B6FC8] rounded-2xl font-bold hover:bg-[#1B6FC8] hover:text-white transition-all"
                  >
                    Gửi yêu cầu khác
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit} 
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-[#0A1F3D] uppercase tracking-2xl ml-1">Họ và tên</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Nguyễn Văn A"
                        className="w-full px-6 py-5 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#1B6FC8] focus:ring-4 focus:ring-[#1B6FC8]/5 outline-none transition-all font-medium"
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-[#0A1F3D] uppercase tracking-2xl ml-1">Số điện thoại</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="09xx xxx xxx"
                        className="w-full px-6 py-5 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#1B6FC8] focus:ring-4 focus:ring-[#1B6FC8]/5 outline-none transition-all font-medium"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-[#0A1F3D] uppercase tracking-2xl ml-1">Gói bảo hiểm quan tâm</label>
                    <select 
                      className="w-full px-6 py-5 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#1B6FC8] focus:ring-4 focus:ring-[#1B6FC8]/5 outline-none transition-all font-medium appearance-none cursor-pointer"
                      value={formData.product}
                      onChange={(e) => setFormData({...formData, product: e.target.value})}
                    >
                      {productOptions.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="pt-4">
                    <button 
                      disabled={status === 'loading'}
                      className="group relative w-full overflow-hidden bg-[#0A1F3D] py-6 rounded-2xl font-bold text-white shadow-2xl shadow-blue-900/20 active:scale-[0.98] transition-all disabled:bg-gray-400"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#1B6FC8] to-[#0A1F3D] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="relative flex items-center justify-center gap-3 text-lg">
                        {status === 'loading' ? 'Đang xử lý dữ liệu...' : (
                          <> Đăng Ký Tư vấn Ngay <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> </>
                        )}
                      </span>
                    </button>
                    <p className="text-center text-gray-400 text-xs mt-6">
                      Bằng cách nhấn gửi, bạn đồng ý với các chính sách bảo mật của chúng tôi.
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}