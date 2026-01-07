
import React from 'react';
import { X, Utensils, Award, Coffee, ArrowRight, Pizza, Beef } from 'lucide-react';

interface DiningSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (id: string, label: string) => void;
}

const diningOptions = [
  { id: 'quan_an', label: 'Quán ăn', icon: <Pizza className="w-6 h-6" />, color: 'bg-orange-50 text-orange-600', desc: 'Cơm, phở, hải sản, nướng lẩu...' },
  { id: 'dich_vu_nau_an', label: 'Nấu ăn & Tiệc cưới', icon: <Beef className="w-6 h-6" />, color: 'bg-rose-50 text-rose-600', desc: 'Dịch vụ nấu tiệc tại gia, đám cưới...' },
  { id: 'ocop', label: 'Sản phẩm OCOP', icon: <Award className="w-6 h-6" />, color: 'bg-emerald-50 text-emerald-600', desc: 'Đặc sản địa phương đạt chuẩn' },
  { id: 'giai_khat', label: 'Giải khát', icon: <Coffee className="w-6 h-6" />, color: 'bg-cyan-50 text-cyan-600', desc: 'Cà phê, trà sữa, sinh tố...' },
];

const DiningSelectionModal: React.FC<DiningSelectionModalProps> = ({ isOpen, onClose, onSelect }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[140] flex flex-col lg:items-center lg:justify-center bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
      <div className="mt-auto lg:mt-0 w-full lg:max-w-md bg-white rounded-t-[40px] lg:rounded-[40px] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-10 duration-500">
        <div className="bg-gradient-to-br from-orange-500 to-amber-600 p-8 text-white relative">
          <button onClick={onClose} className="absolute top-6 right-6 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
            <X className="w-5 h-5"/>
          </button>
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
              <Utensils className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-black uppercase tracking-tight">Ẩm thực & Đặc sản</h2>
            <p className="text-orange-100 text-[10px] font-bold uppercase tracking-widest opacity-80">Khám phá hương vị Hoài Nhơn</p>
          </div>
        </div>
        
        <div className="p-6 space-y-3 bg-slate-50">
          {diningOptions.map((item) => (
            <button 
              key={item.id} 
              onClick={() => onSelect(item.id, item.label)}
              className="w-full bg-white p-4 rounded-2xl border border-slate-100 flex items-center justify-between shadow-sm hover:border-orange-200 transition-all group active:scale-[0.98]"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center`}>
                  {item.icon}
                </div>
                <div className="text-left">
                  <span className="block text-[14px] font-black text-slate-700 uppercase tracking-tight">{item.label}</span>
                  <span className="text-[11px] text-slate-400 font-medium">{item.desc}</span>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-orange-500 transition-all" />
            </button>
          ))}
        </div>
        
        <div className="p-6 bg-white border-t text-center">
          <button onClick={onClose} className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Đóng</button>
        </div>
      </div>
    </div>
  );
};

export default DiningSelectionModal;
