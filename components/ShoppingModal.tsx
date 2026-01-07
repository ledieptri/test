
import React from 'react';
import { X, ShoppingBag, Store, ShoppingCart, Tv, ArrowRight } from 'lucide-react';

interface ShoppingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (id: string, label: string) => void;
}

const shoppingItems = [
  { id: 'cho', label: 'Chợ địa phương', icon: <ShoppingBag className="w-6 h-6" />, color: 'bg-orange-50 text-orange-600', desc: 'Chợ Hoài Hương, Chợ Hoài Mỹ...' },
  { id: 'tien_loi', label: 'Cửa hàng tiện lợi', icon: <Store className="w-6 h-6" />, color: 'bg-blue-50 text-blue-600', desc: 'WinMart+, tạp hóa lớn...' },
  { id: 'bhx', label: 'Bách Hóa Xanh', icon: <ShoppingCart className="w-6 h-6" />, color: 'bg-green-50 text-green-600', desc: 'Thực phẩm, đồ dùng gia đình' },
  { id: 'dmx', label: 'Điện Máy Xanh', icon: <Tv className="w-6 h-6" />, color: 'bg-cyan-50 text-cyan-600', desc: 'Điện tử, gia dụng trả góp' },
];

const ShoppingModal: React.FC<ShoppingModalProps> = ({ isOpen, onClose, onSelect }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[130] flex flex-col lg:items-center lg:justify-center bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
      <div className="mt-auto lg:mt-0 w-full lg:max-w-md bg-white rounded-t-[40px] lg:rounded-[40px] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-10 duration-500">
        <div className="bg-gradient-to-br from-pink-600 to-rose-700 p-8 text-white relative">
          <button onClick={onClose} className="absolute top-6 right-6 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
            <X className="w-5 h-5"/>
          </button>
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-black uppercase tracking-tight leading-tight">Danh mục mua sắm</h2>
            <p className="text-pink-100 text-[10px] font-bold uppercase tracking-widest opacity-80">Chọn loại hình bạn cần tìm</p>
          </div>
        </div>
        
        <div className="p-6 space-y-3 bg-slate-50 max-h-[60vh] overflow-y-auto">
          {shoppingItems.map((item) => (
            <button 
              key={item.id} 
              onClick={() => onSelect(item.id, item.label)}
              className="w-full bg-white p-4 rounded-2xl border border-slate-100 flex items-center justify-between shadow-sm hover:border-pink-200 hover:shadow-md transition-all group active:scale-[0.98]"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center transition-colors`}>
                  {item.icon}
                </div>
                <div className="text-left">
                  <span className="block text-[14px] font-black text-slate-700 uppercase tracking-tight">{item.label}</span>
                  <span className="text-[11px] text-slate-400 font-medium">{item.desc}</span>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-pink-500 transform group-hover:translate-x-1 transition-all" />
            </button>
          ))}
        </div>
        
        <div className="p-6 bg-white border-t text-center">
          <button onClick={onClose} className="text-[11px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-colors">Để sau</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingModal;
