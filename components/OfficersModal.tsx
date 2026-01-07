
import React from 'react';
import { X, UserRound, Award, Phone, Users, ShieldCheck, ChevronRight } from 'lucide-react';

interface Officer {
  id: number;
  name: string;
  position: string;
  phone: string;
}

interface OfficersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const officers: Officer[] = [
  { id: 1, name: "Phạm Văn Chung", position: "Bí thư Đảng ủy, Chủ tịch Hội đồng nhân dân phường", phone: "0905.123.456" },
  { id: 2, name: "Nguyễn Thị Nghệ An", position: "Phó Bí thư Thường trực Đảng ủy phường", phone: "0905.234.567" },
  { id: 3, name: "Nguyễn Văn Hiệp", position: "Phó Bí thư Đảng ủy, Chủ tịch Ủy ban nhân dân phường", phone: "0905.345.678" },
  { id: 4, name: "Nguyễn Hữu Cường", position: "Ủy viên Ban Thường vụ Đảng ủy, Chủ tịch Ủy ban Mặt trận Tổ quốc Việt Nam phường", phone: "0905.456.789" },
  { id: 5, name: "Huỳnh Có", position: "Ủy viên Ban Thường vụ Đảng ủy, Phó Chủ tịch Hội đồng nhân dân phường", phone: "0905.567.890" },
  { id: 6, name: "Phan Văn Quang", position: "Ủy viên Ban Thường vụ Đảng ủy, Phó Chủ tịch Thường trực Ủy ban nhân dân phường", phone: "0905.678.901" },
  { id: 7, name: "Ngô Đình Tuy", position: "Ủy viên Ban Thường vụ Đảng ủy, Phó Chủ tịch Ủy ban nhân dân phường", phone: "0905.789.012" },
  { id: 8, name: "Nguyễn Thế Nam", position: "Ủy viên Ban Thường vụ Đảng ủy, Chủ nhiệm Ủy ban Kiểm tra Đảng ủy phường", phone: "0905.890.123" },
  { id: 9, name: "Nguyễn Trần Quang", position: "Ủy viên Ban Thường vụ Đảng ủy, Trưởng ban Ban xây dựng Đảng Đảng ủy phường", phone: "0905.901.234" },
  { id: 10, name: "Trần Thanh Dân", position: "Ủy viên Ban Thường vụ Đảng ủy, Chỉ huy trưởng Ban Chỉ huy Quân sự phường", phone: "0905.012.345" },
  { id: 11, name: "Lê Anh Hải", position: "Ủy viên Ban Thường vụ Đảng ủy, Trưởng Công an phường", phone: "0905.111.222" }
];

const OfficersModal: React.FC<OfficersModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col lg:items-center lg:justify-center bg-slate-100/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="w-full lg:max-w-2xl lg:h-[85vh] lg:rounded-[48px] bg-slate-50 flex flex-col shadow-2xl overflow-hidden lg:animate-in lg:zoom-in-95 duration-500">
        {/* Header */}
        <div className="bg-gradient-to-br from-emerald-700 to-teal-800 text-white px-6 sm:px-10 py-8 relative overflow-hidden rounded-b-[40px] lg:rounded-b-none shadow-xl">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30 shadow-inner">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-none mb-1">Tổ chức bộ máy</h2>
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-80">Lãnh đạo & Công chức phường</p>
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
              Đội ngũ cán bộ lãnh đạo phường Hoài Nhơn Đông cam kết phục vụ nhân dân với tinh thần trách nhiệm và minh bạch.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {officers.map((off, index) => (
              <div key={off.id} className="bg-white rounded-[32px] p-5 flex items-center gap-5 border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition-all duration-300 group animate-in slide-in-from-bottom-5" style={{ animationDelay: `${index * 50}ms` }}>
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 border border-emerald-100/50 flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-inner">
                  <UserRound className="w-7 h-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-black text-slate-800 text-[14px] sm:text-[15px] leading-tight mb-1 uppercase tracking-tight truncate">
                    {off.name}
                  </h3>
                  <p className="text-[11px] sm:text-[12px] text-slate-500 font-medium leading-snug line-clamp-2 italic">
                    {off.position}
                  </p>
                </div>
                <a href={`tel:${off.phone.replace(/\./g, '')}`} className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all border border-emerald-100/50 shadow-sm flex-shrink-0 active:scale-90">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            ))}
          </div>
          
          <div className="py-8 text-center">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest italic">Hệ thống quản trị cư dân số hiện đại</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficersModal;
