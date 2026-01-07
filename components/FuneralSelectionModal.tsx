
import React from 'react';
import { X, Scroll, Landmark, Users, ArrowRight, HeartHandshake } from 'lucide-react';

interface FuneralSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (id: string, label: string) => void;
}

const funeralOptions = [
  { 
    id: 'dv_mai_tang', 
    label: 'Dịch vụ mai táng', 
    icon: <HeartHandshake className="w-6 h-6" />, 
    color: 'bg-slate-100 text-slate-600', 
    desc: 'Các cơ sở dịch vụ tang lễ địa phương' 
  },
  { 
    id: 'nghia_trang_nhan_dan', 
    label: 'Nghĩa trang nhân dân', 
    icon: <Users className="w-6 h-6" />, 
    color: 'bg-emerald-50 text-emerald-600', 
    desc: 'Thông tin khu vực nghĩa trang nhân dân' 
  },
  { 
    id: 'nghia_trang_liet_si', 
    label: 'Nghĩa trang liệt sĩ', 
    icon: <Landmark className="w-6 h-6" />, 
    color: 'bg-amber-50 text-amber-600', 
    desc: 'Nghĩa trang liệt sĩ phường Hoài Nhơn Đông' 
  },
];

const FuneralSelectionModal: React.FC<FuneralSelectionModalProps> = ({ isOpen, onClose, onSelect }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[140] flex flex-col lg:items-center lg:justify-center bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
      <div className="mt-auto lg:mt-0 w-full lg:max-w-md bg-white rounded-t-[40px] lg:rounded-[40px] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-10 duration-500">
        <div className="bg-gradient-to-br from-slate-600 to-slate-800 p-8 text-white relative">
          <button onClick={onClose} className="absolute top-6 right-6 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center transition-all">
            <X className="w-5 h-5"/>
          </button>
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
              <Scroll className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-black uppercase tracking-tight">Dịch vụ Mai táng</h2>
            <p className="text-slate-100 text-[10px] font-bold uppercase tracking-widest opacity-80">Thông tin hậu sự & Tri ân</p>
          </div>
        </div>
        
        <div className="p-6 space-y-3 bg-slate-50">
          {funeralOptions.map((item) => (
            <button 
              key={item.id} 
              onClick={() => onSelect(item.id, item.label)}
              className="w-full bg-white p-4 rounded-2xl border border-slate-100 flex items-center justify-between shadow-sm hover:border-slate-300 transition-all group active:scale-[0.98]"
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
              <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-slate-600 transition-all" />
            </button>
          ))}
        </div>
        
        <div className="p-6 bg-white border-t text-center">
          <button onClick={onClose} className="text-[11px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-colors">Đóng</button>
        </div>
      </div>
    </div>
  );
};

export default FuneralSelectionModal;
