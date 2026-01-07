
import React from 'react';
// Fixed: Removed non-existent export ShieldInfo and unused icon Info from lucide-react
import { X, CalendarCheck, FileText, UserCheck, Clock, MapPin } from 'lucide-react';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ScheduleModal: React.FC<ScheduleModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const schedules = [
    { title: "Lịch tiếp dân của Bí thư Đảng ủy", person: "Phạm Văn Chung", time: "Sáng Thứ 5 hàng tuần", place: "Phòng Tiếp dân Đảng ủy" },
    { title: "Lịch tiếp dân của Chủ tịch HĐND", person: "Phạm Văn Chung (kiêm nhiệm)", time: "Sáng Thứ 3 hàng tuần", place: "Văn phòng HĐND" },
    { title: "Lịch tiếp dân của Chủ tịch UBND", person: "Nguyễn Văn Hiệp", time: "Sáng Thứ 2 hàng tuần", place: "Phòng Tiếp dân UBND" },
  ];

  return (
    <div className="fixed inset-0 z-[120] flex flex-col lg:items-center lg:justify-center bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
      <div className="mt-auto lg:mt-0 w-full lg:max-w-2xl h-[85vh] lg:h-auto bg-white rounded-t-[40px] lg:rounded-[40px] shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-10 duration-500">
        <div className="bg-gradient-to-br from-indigo-700 to-blue-800 p-8 text-white relative">
          <button onClick={onClose} className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center transition-all">
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shadow-inner">
              <CalendarCheck className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-xl font-black uppercase tracking-tight">Lịch Tiếp Công Dân</h2>
              <p className="text-blue-100 text-[10px] font-bold uppercase tracking-widest opacity-80">Công khai - Minh bạch - Kịp thời</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-slate-50">
          <div className="space-y-4">
            {schedules.map((s, i) => (
              <div key={i} className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <UserCheck className="w-5 h-5 text-indigo-600" />
                  <h4 className="font-black text-slate-800 text-sm uppercase">{s.title}</h4>
                </div>
                <div className="grid grid-cols-2 gap-4 text-[13px]">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Clock className="w-4 h-4" /> {s.time}
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <MapPin className="w-4 h-4" /> {s.place}
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-50">
                  <p className="text-[12px] font-bold text-slate-700">Người tiếp: <span className="text-indigo-600">{s.person}</span></p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-indigo-50 p-6 rounded-3xl border border-indigo-100">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-5 h-5 text-indigo-700" />
              <h4 className="font-black text-indigo-900 text-sm uppercase">Quy định tiếp công dân</h4>
            </div>
            <ul className="text-[12px] text-indigo-800 space-y-3 font-medium">
              <li className="flex gap-2"><span>1.</span> Công dân khi đến khiếu nại, tố cáo phải xuất trình giấy tờ tùy thân.</li>
              <li className="flex gap-2"><span>2.</span> Phải chấp hành nội quy nơi tiếp công dân, không gây mất trật tự.</li>
              <li className="flex gap-2"><span>3.</span> Trình bày trung thực sự việc, cung cấp tài liệu liên quan đến nội dung khiếu nại.</li>
              <li className="flex gap-2"><span>4.</span> Không được lợi dụng quyền tự do dân chủ để xuyên tạc, vu khống.</li>
            </ul>
          </div>
        </div>
        
        <div className="p-6 bg-white border-t text-center">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Ủy ban nhân dân phường Hoài Nhơn Đông</p>
        </div>
      </div>
    </div>
  );
};

export default ScheduleModal;
