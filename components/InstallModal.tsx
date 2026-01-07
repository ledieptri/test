
import React from 'react';
import { X, Download, Smartphone, Laptop, CheckCircle2, Share, PlusSquare, ArrowBigDownDash } from 'lucide-react';

interface InstallModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInstall: () => void;
  isIOS: boolean;
  canInstall: boolean;
}

const InstallModal: React.FC<InstallModalProps> = ({ isOpen, onClose, onInstall, isIOS, canInstall }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex flex-col lg:items-center lg:justify-center bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
      <div className="mt-auto lg:mt-0 w-full lg:max-w-md bg-white rounded-t-[40px] lg:rounded-[40px] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-10 duration-500">
        {/* Header */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white relative">
          <div className="absolute top-0 right-0 p-4">
            <button onClick={onClose} className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-2xl transform -rotate-6">
              <Download className="w-10 h-10 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-black tracking-tight">Tải Ứng Dụng</h2>
              <p className="text-blue-100 text-sm font-medium opacity-80 uppercase tracking-widest">Hoài Nhơn Đông - Cư dân Số</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <p className="text-sm text-slate-600 font-medium">Truy cập nhanh từ màn hình chính</p>
            </div>
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-6 h-6" />
              </div>
              <p className="text-sm text-slate-600 font-medium">Trải nghiệm mượt mà như app thật</p>
            </div>
          </div>

          {isIOS ? (
            <div className="bg-amber-50 border border-amber-100 rounded-3xl p-6 space-y-4">
              <h4 className="font-bold text-amber-800 flex items-center gap-2 text-sm uppercase tracking-tight">
                <Smartphone className="w-4 h-4" /> Hướng dẫn cho iPhone/iPad:
              </h4>
              <ol className="text-sm text-amber-700 space-y-3 font-medium">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center text-[10px] font-bold">1</span>
                  Nhấn vào nút <Share className="w-4 h-4 inline" /> (Chia sẻ) trên Safari
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center text-[10px] font-bold">2</span>
                  Chọn mục <b>"Thêm vào MH chính"</b> <PlusSquare className="w-4 h-4 inline" />
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center text-[10px] font-bold">3</span>
                  Nhấn "Thêm" để hoàn tất
                </li>
              </ol>
            </div>
          ) : canInstall ? (
            <button 
              onClick={onInstall}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-600/20 transition-all active:scale-95 flex items-center justify-center gap-3"
            >
              <Download className="w-6 h-6" />
              CÀI ĐẶT NGAY
            </button>
          ) : (
            <div className="text-center p-6 bg-slate-100 rounded-3xl border border-dashed border-slate-300">
              <p className="text-sm text-slate-500 font-medium italic">
                Ứng dụng đã được cài đặt hoặc trình duyệt của bạn không hỗ trợ cài đặt tự động. Hãy sử dụng menu trình duyệt để "Thêm vào màn hình chính".
              </p>
            </div>
          )}

          <div className="text-center">
            <button onClick={onClose} className="text-slate-400 text-xs font-bold uppercase tracking-widest hover:text-slate-600 transition-colors">
              Để sau
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallModal;
