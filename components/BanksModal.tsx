
import React from 'react';
import { X, Landmark, MapPin, Phone, ExternalLink, ShieldCheck, Wallet, CreditCard } from 'lucide-react';

interface Bank {
  id: string;
  name: string;
  address: string;
  phone: string;
  mapUrl?: string;
  description: string;
  imageUrl: string;
}

interface BanksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const banks: Bank[] = [
  {
    id: 'agribank-hoai-nhon-dong',
    name: "Agribank Chi nhánh Hoài Nhơn Đông",
    address: "Hoài Hương, Hoài Nhơn, Bình Định, Việt Nam",
    phone: "0584.820.205",
    mapUrl: "https://maps.app.goo.gl/cwAS9vkHYxJT8auNA",
    description: "Ngân hàng Nông nghiệp và Phát triển Nông thôn Việt Nam.",
    imageUrl: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&q=80&w=400"
  }
];

const BanksModal: React.FC<BanksModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col lg:items-center lg:justify-center bg-slate-100/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="w-full lg:max-w-2xl lg:h-[85vh] lg:rounded-[48px] bg-slate-50 flex flex-col shadow-2xl overflow-hidden lg:animate-in lg:zoom-in-95 duration-500">
        {/* Header */}
        <div className="bg-gradient-to-br from-emerald-800 to-green-900 text-white px-6 sm:px-10 py-8 relative overflow-hidden rounded-b-[40px] lg:rounded-b-none shadow-xl">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-yellow-400/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30 shadow-inner">
                <Landmark className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-none mb-1">Hệ thống Ngân hàng</h2>
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-80">Giao dịch an toàn & Tin cậy</p>
              </div>
            </div>
            <button onClick={onClose} className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center border border-white/10 transition-all active:scale-90">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-8 space-y-6 sm:space-y-8">
          <div className="bg-white p-5 rounded-3xl border border-emerald-100 shadow-sm flex items-start gap-4">
            <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
            <p className="text-[12px] sm:text-[13px] text-slate-600 font-medium leading-relaxed">
              Danh sách các ngân hàng và điểm giao dịch tài chính hỗ trợ cư dân Phường Hoài Nhơn Đông.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {banks.map((bank) => (
              <div key={bank.id} className="bg-white rounded-[40px] shadow-sm border border-slate-100 overflow-hidden group hover:shadow-xl hover:border-emerald-200 transition-all duration-500">
                <div className="h-40 sm:h-48 w-full relative overflow-hidden">
                  <img src={bank.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={bank.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <h3 className="text-white font-black text-lg sm:text-xl tracking-tight">{bank.name}</h3>
                  </div>
                  <div className="absolute top-4 right-6 bg-yellow-500 text-slate-900 text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1.5 border border-white/20">
                    <CreditCard className="w-3.5 h-3.5" /> Có máy ATM
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" /> 
                      <p className="text-[12px] sm:text-[13px] text-slate-600 font-semibold leading-snug">{bank.address}</p>
                    </div>
                    <a href={`tel:${bank.phone.replace(/\./g, '')}`} className="flex items-center gap-3 w-fit group/phone">
                      <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0 group-hover/phone:animate-pulse" />
                      <span className="text-[14px] font-black text-slate-800">{bank.phone}</span>
                    </a>
                  </div>

                  <div className="pt-2">
                    {bank.mapUrl && (
                      <a href={bank.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-2xl font-bold text-[13px] hover:bg-black transition-all shadow-lg active:scale-95 w-full">
                        <MapPin className="w-4 h-4" /> Chỉ đường bản đồ
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="py-8 text-center">
            <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-2xl border border-slate-200">
              <Wallet className="w-4 h-4 text-slate-500" />
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest italic">Hệ thống tài chính an toàn 4.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BanksModal;
