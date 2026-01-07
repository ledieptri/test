
import React from 'react';
import { X, MapPin, GraduationCap, Phone, Info, School } from 'lucide-react';

interface SchoolData {
  id: string;
  name: string;
  address: string;
  phone: string;
  mapUrl: string;
  imageUrl: string;
}

interface SchoolsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const schools: SchoolData[] = [
  {
    id: 'mn-huong-sen',
    name: "Trường Mầm Non Hương Sen - Hoài Hương",
    address: "28 Trần Bạch Đằng, Hoài Hương, Hoài Nhơn, Bình Định, Việt Nam",
    phone: "0988.038.903",
    mapUrl: "https://maps.app.goo.gl/WyxvMwsSexGux8oh8",
    imageUrl: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&q=80&w=400"
  }
];

const SchoolsModal: React.FC<SchoolsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col lg:items-center lg:justify-center bg-slate-100/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="w-full lg:max-w-2xl lg:h-[85vh] lg:rounded-[48px] bg-slate-50 flex flex-col shadow-2xl overflow-hidden lg:animate-in lg:zoom-in-95 duration-500">
        {/* Header */}
        <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white px-6 sm:px-10 py-8 relative overflow-hidden rounded-b-[40px] lg:rounded-b-none shadow-xl">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30 shadow-inner">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-none mb-1">Giáo dục & Trường học</h2>
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-80">Thông tin địa phương</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center border border-white/10 transition-all active:scale-90"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-8 space-y-6">
          <div className="bg-white p-5 rounded-3xl border border-amber-100 shadow-sm flex items-start gap-4">
            <School className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
            <p className="text-[12px] sm:text-[13px] text-slate-600 font-medium leading-relaxed">
              Thông tin liên hệ các cơ sở giáo dục, mầm non, tiểu học và trung học cơ sở tại phường.
            </p>
          </div>

          <div className="space-y-6">
            {schools.map((school) => (
              <div 
                key={school.id}
                className="bg-white rounded-[40px] shadow-sm border border-slate-100 overflow-hidden group hover:shadow-xl hover:border-amber-100 transition-all duration-500"
              >
                <div className="h-40 sm:h-48 w-full relative overflow-hidden">
                  <img 
                    src={school.imageUrl} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                    alt={school.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <h3 className="text-white font-black text-lg sm:text-xl tracking-tight">{school.name}</h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <p className="text-[12px] sm:text-[13px] text-slate-600 font-semibold leading-snug">
                        {school.address}
                      </p>
                    </div>

                    <a href={`tel:${school.phone.replace(/\./g, '')}`} className="flex items-center gap-3 w-fit hover:text-emerald-600 transition-colors group/phone">
                      <Phone className="w-4 h-4 text-emerald-500 flex-shrink-0 group-hover/phone:animate-pulse" />
                      <span className="text-[14px] font-black text-slate-800">{school.phone}</span>
                    </a>
                  </div>

                  <a 
                    href={school.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-2xl font-bold text-[13px] hover:bg-amber-600 transition-all shadow-lg active:scale-95"
                  >
                    <MapPin className="w-4 h-4" />
                    Chỉ đường bản đồ
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="py-8 text-center">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest italic">Cập nhật bởi Phòng Giáo dục & Đào tạo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolsModal;
