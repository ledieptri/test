
import React from 'react';
import { X, ShieldCheck, MapPin, Phone, ExternalLink, Siren, AlertTriangle, ShieldAlert } from 'lucide-react';

interface SecurityFacility {
  id: string;
  name: string;
  address: string;
  phone: string;
  mapUrl?: string;
  description: string;
  imageUrl: string;
}

interface SecurityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const securityFacilities: SecurityFacility[] = [
  {
    id: 'ca-phuong',
    name: "Công An Phường Hoài Nhơn Đông",
    address: "Văn Tiến Dũng, Phường Hoài Nhơn Đông, Hoài Nhơn, Bình Định",
    phone: "0256.3868.150",
    mapUrl: "https://maps.app.goo.gl/XTNwhdsbRnJsYst88",
    description: "Cơ quan đảm bảo an ninh trật tự, tiếp nhận khai báo cư trú và xử lý các vấn đề an ninh tại địa bàn phường Hoài Nhơn Đông.",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=400"
  }
];

const SecurityModal: React.FC<SecurityModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col lg:items-center lg:justify-center bg-slate-100/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="w-full lg:max-w-2xl lg:h-[85vh] lg:rounded-[48px] bg-slate-50 flex flex-col shadow-2xl overflow-hidden lg:animate-in lg:zoom-in-95 duration-500">
        {/* Header */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white px-6 sm:px-10 py-8 relative overflow-hidden rounded-b-[40px] lg:rounded-b-none shadow-xl">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20 shadow-inner">
                <ShieldCheck className="w-7 h-7 text-emerald-400" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-none mb-1">An ninh & Trật tự</h2>
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-60">Vì bình yên của nhân dân</p>
              </div>
            </div>
            <button onClick={onClose} className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center border border-white/10 transition-all active:scale-90">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-8 space-y-6 sm:space-y-8">
          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex items-start gap-4">
            <ShieldAlert className="w-5 h-5 text-slate-800 flex-shrink-0 mt-1" />
            <p className="text-[12px] sm:text-[13px] text-slate-600 font-medium leading-relaxed">
              Lực lượng công an phường thường trực đảm bảo an ninh, trật tự và an toàn xã hội trên địa bàn Hoài Nhơn Đông.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <a href="tel:113" className="flex flex-col items-center justify-center gap-2 p-5 bg-red-600 rounded-[32px] text-white transition-all active:scale-95 shadow-lg shadow-red-900/20 group">
              <Siren className="w-7 h-7 group-hover:rotate-12 transition-transform" />
              <span className="text-[11px] font-black uppercase tracking-widest">Cấp cứu 113</span>
            </a>
            <div className="flex flex-col items-center justify-center gap-2 p-5 bg-white border border-slate-100 rounded-[32px] text-amber-600 shadow-sm">
              <AlertTriangle className="w-7 h-7" />
              <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">Phòng ngừa</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {securityFacilities.map((f) => (
              <div key={f.id} className="bg-white rounded-[40px] shadow-sm border border-slate-100 overflow-hidden group hover:shadow-xl hover:border-slate-300 transition-all duration-500">
                <div className="h-40 sm:h-48 w-full relative overflow-hidden">
                  <img src={f.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={f.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <h3 className="text-white font-black text-lg sm:text-xl tracking-tight">{f.name}</h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                      <p className="text-[12px] sm:text-[13px] text-slate-600 font-semibold leading-snug">{f.address}</p>
                    </div>
                    <a href={`tel:${f.phone.replace(/\./g, '')}`} className="flex items-center gap-3 w-fit group/phone">
                      <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0 group-hover/phone:animate-pulse" />
                      <span className="text-[14px] font-black text-slate-800">{f.phone}</span>
                    </a>
                  </div>

                  <div className="pt-2">
                    {f.mapUrl && (
                      <a href={f.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-2xl font-bold text-[13px] hover:bg-black transition-all shadow-lg active:scale-95 w-full">
                        <MapPin className="w-4 h-4" /> Bản đồ chỉ đường
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="py-8 text-center">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest italic">An toàn của nhân dân là trên hết</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityModal;
