
import React from 'react';
import { X, MapPin, Hospital, Activity, Phone } from 'lucide-react';

interface MedicalFacility {
  id: string;
  name: string;
  address: string;
  phone: string;
  description: string;
  mapUrl: string;
  imageUrl: string;
}

interface MedicalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const facilities: MedicalFacility[] = [
  {
    id: 'tyt-hoai-huong',
    name: "Trạm y tế Hoài Hương",
    address: "Thạnh Xuân Bắc, Phường Hoài Nhơn Đông, Hoài Nhơn, Bình Định",
    phone: "0256.3861.115",
    description: "Cơ sở y tế phục vụ khám chữa bệnh ban đầu cho cư dân khu vực Hoài Hương.",
    mapUrl: "https://maps.app.goo.gl/UFSwBJ9BykJNb1fj7",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 'tyt-hoai-my',
    name: "Trạm y tế Hoài Mỹ",
    address: "Thạnh Xuân, Phường Hoài Nhơn Đông, Hoài Nhơn, Bình Định",
    phone: "0256.3861.222",
    description: "Trạm y tế trung tâm, thực hiện các chương trình mục tiêu y tế quốc gia tại địa phương.",
    mapUrl: "https://maps.app.goo.gl/atGjr14ZFaLJ9GHi9",
    imageUrl: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=400"
  }
];

const MedicalModal: React.FC<MedicalModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col lg:items-center lg:justify-center bg-slate-100/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="w-full lg:max-w-2xl lg:h-[85vh] lg:rounded-[48px] bg-slate-50 flex flex-col shadow-2xl overflow-hidden lg:animate-in lg:zoom-in-95 duration-500">
        {/* Header */}
        <div className="bg-gradient-to-br from-red-600 to-rose-700 text-white px-6 sm:px-10 py-8 relative overflow-hidden rounded-b-[40px] lg:rounded-b-none shadow-xl">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30 shadow-inner">
                <Hospital className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-none mb-1">Cơ sở Y tế</h2>
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
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-8 space-y-6 sm:space-y-8">
          <div className="bg-white p-5 rounded-3xl border border-red-100 shadow-sm flex items-start gap-4">
            <Activity className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
            <p className="text-[12px] sm:text-[13px] text-slate-600 font-medium leading-relaxed">
              Các trạm y tế trực thuộc phường hỗ trợ sơ cấp cứu và khám sức khỏe ban đầu cho bà con 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {facilities.map((fac) => (
              <div 
                key={fac.id}
                className="bg-white rounded-[40px] shadow-sm border border-slate-100 overflow-hidden group hover:shadow-xl hover:border-red-100 transition-all duration-500"
              >
                <div className="h-32 sm:h-40 lg:h-48 w-full relative overflow-hidden">
                  <img 
                    src={fac.imageUrl} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                    alt={fac.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <h3 className="text-white font-black text-lg sm:text-xl tracking-tight">{fac.name}</h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <p className="text-[12px] sm:text-[13px] text-slate-600 font-semibold leading-snug">
                        {fac.address}
                      </p>
                    </div>

                    <a href={`tel:${fac.phone}`} className="flex items-center gap-3 w-fit hover:text-green-600 transition-colors">
                      <Phone className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-[14px] font-black text-slate-800">{fac.phone}</span>
                    </a>
                  </div>

                  <a 
                    href={fac.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-2xl font-bold text-[13px] hover:bg-red-600 transition-all shadow-lg active:scale-95"
                  >
                    <MapPin className="w-4 h-4" />
                    Chỉ đường bản đồ
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="py-8 text-center">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest italic">Cập nhật bởi Trung tâm Y tế</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalModal;
