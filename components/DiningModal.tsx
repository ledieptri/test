
import React from 'react';
import { X, Utensils, MapPin, Phone, Star, Sparkles, Heart, Flame } from 'lucide-react';

interface Restaurant {
  id: string;
  name: string;
  address: string;
  phone: string;
  mapUrl?: string;
  images: string[];
}

interface DiningModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const restaurants: Restaurant[] = [
  {
    id: 'co-beo-bbq',
    name: "CÔ BÉO BBQ - Nướng & Lẩu 2 Người",
    address: "F3PP+4RX, Đường Võ Nguyên Giáp, Thạnh Xuân, Hoài Nhơn, Bình Định, Việt Nam",
    phone: "0369.169.333",
    mapUrl: "https://maps.app.goo.gl/FzLUAAqqn6RLEkrU9",
    images: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1529193591184-b1d58b34ecdf?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1603360946369-dc9bb0258143?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=400"
    ]
  }
];

const DiningModal: React.FC<DiningModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col lg:items-center lg:justify-center bg-slate-100/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="w-full lg:max-w-2xl lg:h-[85vh] lg:rounded-[48px] bg-slate-50 flex flex-col shadow-2xl overflow-hidden lg:animate-in lg:zoom-in-95 duration-500">
        {/* Header */}
        <div className="bg-gradient-to-br from-orange-500 to-rose-600 text-white px-6 sm:px-10 py-8 relative overflow-hidden rounded-b-[40px] lg:rounded-b-none shadow-xl">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30 shadow-inner">
                <Utensils className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-none mb-1">Ẩm thực Địa phương</h2>
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-80">Hương vị quê hương Hoài Nhơn</p>
              </div>
            </div>
            <button onClick={onClose} className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center border border-white/10 transition-all active:scale-90">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-8 space-y-6 sm:space-y-8">
          <div className="bg-white p-5 rounded-3xl border border-orange-100 shadow-sm flex items-start gap-4">
            <Flame className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
            <p className="text-[12px] sm:text-[13px] text-slate-600 font-medium leading-relaxed">
              Khám phá các điểm đến ẩm thực đặc sắc, nơi hội tụ những món ngon nồng nàn và không gian ấm cúng.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {restaurants.map((res) => (
              <div key={res.id} className="bg-white rounded-[40px] shadow-sm border border-slate-100 overflow-hidden group hover:shadow-xl hover:border-orange-200 transition-all duration-500">
                {/* 6-Image Grid Gallery */}
                <div className="grid grid-cols-3 gap-1 bg-slate-200 p-1">
                  {res.images.map((img, idx) => (
                    <div key={idx} className={`relative overflow-hidden ${idx === 0 ? 'col-span-2 row-span-2 h-64' : 'h-32'}`}>
                      <img 
                        src={img} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                        alt={`${res.name} ${idx + 1}`}
                      />
                      {idx === 0 && (
                        <div className="absolute top-4 left-4 bg-orange-600 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg border border-white/20">
                          Ảnh nổi bật
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-slate-900 font-black text-xl tracking-tight leading-tight">{res.name}</h3>
                    <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg border border-yellow-200">
                      <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                      <span className="text-[11px] font-black text-yellow-700">5.0</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" /> 
                      <p className="text-[12px] sm:text-[13px] text-slate-600 font-semibold leading-snug">{res.address}</p>
                    </div>
                    <a href={`tel:${res.phone.replace(/\./g, '')}`} className="flex items-center gap-3 w-fit group/phone">
                      <Phone className="w-4 h-4 text-orange-600 flex-shrink-0 group-hover/phone:animate-pulse" />
                      <span className="text-[15px] font-black text-slate-800">{res.phone}</span>
                    </a>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-4">
                    <a href={`tel:${res.phone.replace(/\./g, '')}`} className="flex items-center justify-center gap-2 py-4 bg-orange-50 text-orange-700 rounded-2xl font-bold text-[13px] hover:bg-orange-100 transition-all border border-orange-100">
                      <Phone className="w-4 h-4" /> Đặt bàn ngay
                    </a>
                    {res.mapUrl && (
                      <a href={res.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-2xl font-bold text-[13px] hover:bg-black transition-all shadow-lg active:scale-95">
                        <MapPin className="w-4 h-4" /> Bản đồ chỉ đường
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="py-8 text-center">
            <div className="inline-flex items-center gap-2 bg-rose-50 px-4 py-2 rounded-2xl border border-rose-100">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              <span className="text-[10px] text-rose-700 font-bold uppercase tracking-widest italic text-center">Tận tâm phục vụ thực khách Hoài Nhơn Đông</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiningModal;
