
import React from 'react';
import { MapPin, ExternalLink, Waves, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  const mapUrl = "https://maps.app.goo.gl/gfmGRbBZmeku8Qry7";

  return (
    <div className="relative overflow-hidden pt-10 pb-16 px-6 rounded-b-[48px] shadow-2xl shadow-emerald-900/20">
      {/* Background phối màu emerald sang trọng */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-700"></div>
      
      {/* Hiệu ứng ánh sáng nghệ thuật */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-400/20 rounded-full blur-[60px]"></div>
      <div className="absolute top-20 -left-10 w-32 h-32 bg-teal-300/10 rounded-full blur-[40px]"></div>

      {/* Họa tiết sóng nước tinh tế */}
      <div className="absolute bottom-0 left-0 right-0 h-16 opacity-[0.07] pointer-events-none">
        <svg viewBox="0 0 1440 320" className="w-full h-full preserve-aspect-ratio-none">
          <path fill="#ffffff" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="flex items-center gap-4 mb-6">
          {/* Logo thiết kế lại */}
          <div className="w-14 h-14 bg-white/10 backdrop-blur-2xl rounded-[20px] flex items-center justify-center border border-white/20 shadow-xl transform -rotate-6">
            <Sparkles className="w-8 h-8 text-emerald-200" />
          </div>
          
          <div className="text-left">
            <h1 className="text-2xl font-black text-white leading-none tracking-tight mb-1">Hoài Nhơn Đông</h1>
            <div className="flex items-center gap-1.5 bg-black/10 backdrop-blur-sm px-2 py-0.5 rounded-full border border-white/5">
              <Waves className="w-3 h-3 text-cyan-300" />
              <span className="text-[9px] text-white/90 font-bold uppercase tracking-[0.15em]">Cư dân số</span>
            </div>
          </div>
        </div>

        <a 
          href={mapUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all px-4 py-2 rounded-2xl border border-white/10 active:scale-95 group"
        >
          <MapPin className="w-3.5 h-3.5 text-emerald-300 group-hover:animate-bounce" />
          <span className="text-[11px] text-white font-semibold">50 Văn Tiến Dũng, P. Hoài Nhơn Đông</span>
          <ExternalLink className="w-3 h-3 text-white/40" />
        </a>
      </div>
    </div>
  );
};

export default Header;
