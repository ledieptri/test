
import React from 'react';
import { X, Pill, MapPin, Phone, Clock, Truck, Info, Activity } from 'lucide-react';

interface Pharmacy {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  hasDelivery: boolean;
  mapUrl?: string;
  imageUrl: string;
}

interface PharmacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const pharmacies: Pharmacy[] = [
  {
    id: 'p3',
    name: "Nhà Thuốc FPT Long Châu",
    address: "Thôn Thạnh Xuân Đông, P. Hoài Nhơn Đông, Bình Định, Việt Nam",
    phone: "0256.3868.150",
    hours: "07:00 - 22:00",
    hasDelivery: true,
    mapUrl: "https://maps.app.goo.gl/1ocWYxGL3EAQSNx87",
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 'p1',
    name: "Nhà thuốc An Khang Hoài Hương",
    address: "Ngã 4 Hoài Hương, Hoài Nhơn, Bình Định",
    phone: "1800.1061",
    hours: "06:30 - 21:30",
    hasDelivery: true,
    mapUrl: "https://maps.app.goo.gl/UFSwBJ9BykJNb1fj7",
    imageUrl: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 'p2',
    name: "Quầy thuốc số 45 - Hoài Mỹ",
    address: "Chợ Hoài Mỹ, Phường Hoài Nhơn Đông",
    phone: "0256.3861.444",
    hours: "07:00 - 19:00",
    hasDelivery: false,
    imageUrl: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=400"
  }
];

const PharmacyModal: React.FC<PharmacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col lg:items-center lg:justify-center bg-slate-100/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="w-full lg:max-w-2xl lg:h-[85vh] lg:rounded-[48px] bg-slate-50 flex flex-col shadow-2xl overflow-hidden lg:animate-in lg:zoom-in-95 duration-500">
        {/* Header */}
        <div className="bg-gradient-to-br from-teal-600 to-emerald-700 text-white px-6 sm:px-10 py-8 relative overflow-hidden rounded-b-[40px] lg:rounded-b-none shadow-xl">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30 shadow-inner">
                <Pill className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-none mb-1">Hệ thống Nhà thuốc</h2>
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-80">Chăm sóc sức khỏe 24/7</p>
              </div>
            </div>
            <button onClick={onClose} className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center border border-white/10 transition-all active:scale-90">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-8 space-y-6 sm:space-y-8">
          <div className="bg-white p-5 rounded-3xl border border-teal-100 shadow-sm flex items-start gap-4">
            <Activity className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
            <p className="text-[12px] sm:text-[13px] text-slate-600 font-medium leading-relaxed">
              Danh sách các nhà thuốc đạt chuẩn GPP tại địa phương, hỗ trợ cung cấp thuốc và tư vấn y tế tận tâm.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {pharmacies.map((p) => (
              <div key={p.id} className="bg-white rounded-[40px] shadow-sm border border-slate-100 overflow-hidden group hover:shadow-xl hover:border-teal-100 transition-all duration-500">
                <div className="h-40 sm:h-48 w-full relative overflow-hidden">
                  <img src={p.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={p.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <h3 className="text-white font-black text-lg sm:text-xl tracking-tight">{p.name}</h3>
                  </div>
                  {p.hasDelivery && (
                    <div className="absolute top-4 right-6 bg-emerald-500 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1.5 border border-white/20">
                      <Truck className="w-3.5 h-3.5" /> Có giao hàng
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start gap-3 text-[12px] sm:text-[13px] text-slate-600">
                      <MapPin className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                      <span className="font-semibold leading-snug">{p.address}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[12px] sm:text-[13px] text-slate-600 font-medium">
                      <Clock className="w-4 h-4 text-teal-500 flex-shrink-0" /> {p.hours}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <a href={`tel:${p.phone.replace(/\./g, '')}`} className="flex items-center justify-center gap-2 py-4 bg-teal-50 text-teal-700 rounded-2xl font-bold text-[13px] hover:bg-teal-100 transition-all border border-teal-100">
                      <Phone className="w-4 h-4" /> Gọi ngay
                    </a>
                    {p.mapUrl && (
                      <a href={p.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-2xl font-bold text-[13px] hover:bg-black transition-all shadow-lg active:scale-95">
                        <MapPin className="w-4 h-4" /> Chỉ đường
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="py-8 text-center">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest italic">Vì sức khỏe cộng đồng Hoài Nhơn Đông</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyModal;
