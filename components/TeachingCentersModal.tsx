
import React from 'react';
import { X, BookOpen, MapPin, Phone, ExternalLink, GraduationCap, Star, Lightbulb, Sparkles } from 'lucide-react';

interface TeachingCenter {
  id: string;
  name: string;
  address: string;
  phone: string;
  mapUrl?: string;
  description: string;
  imageUrl: string;
  subjects: string[];
}

interface TeachingCentersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const teachingCenters: TeachingCenter[] = [
  {
    id: 'asoka',
    name: "Trung Tâm Ngoại Ngữ ASOKA",
    address: "F3JQ+FH2, Thông Nhuận, Hoài Nhơn, Bình Định, Việt Nam",
    phone: "0563.868.869",
    mapUrl: "https://maps.app.goo.gl/TbTA5RT1nAdrPy9UA",
    description: "",
    imageUrl: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=400",
    subjects: ["Tiếng Anh trẻ em", "Luyện thi IELTS", "Giao tiếp"]
  }
];

const TeachingCentersModal: React.FC<TeachingCentersModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col lg:items-center lg:justify-center bg-slate-100/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="w-full lg:max-w-2xl lg:h-[85vh] lg:rounded-[48px] bg-slate-50 flex flex-col shadow-2xl overflow-hidden lg:animate-in lg:zoom-in-95 duration-500">
        {/* Header */}
        <div className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white px-6 sm:px-10 py-8 relative overflow-hidden rounded-b-[40px] lg:rounded-b-none shadow-xl">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30 shadow-inner">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-none mb-1">Trung tâm Dạy học</h2>
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-80">Kiến tạo tri thức tương lai</p>
              </div>
            </div>
            <button onClick={onClose} className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center border border-white/10 transition-all active:scale-90">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-8 space-y-6 sm:space-y-8">
          <div className="bg-white p-5 rounded-3xl border border-purple-100 shadow-sm flex items-start gap-4">
            <Lightbulb className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
            <p className="text-[12px] sm:text-[13px] text-slate-600 font-medium leading-relaxed">
              Các trung tâm bồi dưỡng kiến thức, ngoại ngữ và kỹ năng giúp nâng cao trình độ học vấn cho cư dân địa phương.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {teachingCenters.map((tc) => (
              <div key={tc.id} className="bg-white rounded-[40px] shadow-sm border border-slate-100 overflow-hidden group hover:shadow-xl hover:border-purple-100 transition-all duration-500">
                <div className="h-40 sm:h-48 w-full relative overflow-hidden">
                  <img src={tc.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={tc.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <h3 className="text-white font-black text-lg sm:text-xl tracking-tight">{tc.name}</h3>
                  </div>
                  <div className="absolute top-4 right-6 bg-yellow-400 text-yellow-900 text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1.5 border border-white/20">
                    <Star className="w-3.5 h-3.5 fill-yellow-900" /> Top Địa Phương
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {tc.subjects.map((s, i) => (
                      <span key={i} className="text-[10px] bg-purple-50 text-purple-600 px-3 py-1 rounded-full font-black border border-purple-100/50 uppercase tracking-tighter">
                        {s}
                      </span>
                    ))}
                  </div>
                  
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" /> 
                      <p className="text-[12px] sm:text-[13px] text-slate-600 font-semibold leading-snug">{tc.address}</p>
                    </div>
                    <a href={`tel:${tc.phone.replace(/\./g, '')}`} className="flex items-center gap-3 w-fit group/phone">
                      <Phone className="w-4 h-4 text-purple-600 flex-shrink-0 group-hover/phone:animate-pulse" /> 
                      <span className="text-[14px] font-black text-slate-800">{tc.phone}</span>
                    </a>
                  </div>

                  <div className="pt-4">
                    {tc.mapUrl && (
                      <a href={tc.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-2xl font-bold text-[13px] hover:bg-black transition-all shadow-lg active:scale-95 w-full">
                        <MapPin className="w-4 h-4" /> Chỉ đường bản đồ
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="py-8 text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-2xl border border-indigo-100">
              <Sparkles className="w-4 h-4 text-indigo-500" />
              <span className="text-[11px] font-bold text-indigo-700 uppercase tracking-tighter">Ươm mầm tài năng trẻ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachingCentersModal;
