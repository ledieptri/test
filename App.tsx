
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Stethoscope, School, Mail, Library, Utensils, Globe, FileText, ShieldCheck, Phone, Send, Loader2,
  MessageSquareText, X, Droplets, Zap, Users, Map as MapIcon, Landmark, Building2, Hospital,
  GraduationCap, Hotel, Mic2, Flower2, Scroll, ArrowRight, Pill, BookOpen, Download, Smartphone,
  ZapOff, Siren, Flame, AlertTriangle, CalendarCheck, Award, Fuel, Construction, Truck, Beef,
  Coffee, Tent, Waves, Mountain, Landmark as Church, HeartPulse, Hammer, Megaphone, Info, Home,
  ClipboardList, LifeBuoy, ShoppingBag, Trees, Music, Dumbbell, History, Briefcase, Wallet, CreditCard, Shield,
  Search, Car
} from 'lucide-react';
import { Category, ChatMessage, MenuItem } from './types';
import Header from './components/Header';
import CategorySection from './components/CategorySection';
import OfficersModal from './components/OfficersModal';
import MedicalModal from './components/MedicalModal';
import SchoolsModal from './components/SchoolsModal';
import PharmacyModal from './components/PharmacyModal';
import SecurityModal from './components/SecurityModal';
import TeachingCentersModal from './components/TeachingCentersModal';
import BanksModal from './components/BanksModal';
import DiningModal from './components/DiningModal';
import DiningSelectionModal from './components/DiningSelectionModal';
import InstallModal from './components/InstallModal';
import ScheduleModal from './components/ScheduleModal';
import InfrastructureModal from './components/InfrastructureModal';
import ShoppingModal from './components/ShoppingModal';
import FuneralSelectionModal from './components/FuneralSelectionModal';
import { getAssistantResponse } from './services/geminiService';

const App: React.FC = () => {
  const Marquee = 'marquee' as any;
  const [showAI, setShowAI] = useState(false);
  const [showOfficers, setShowOfficers] = useState(false);
  const [showMedical, setShowMedical] = useState(false);
  const [showSchools, setShowSchools] = useState(false);
  const [showPharmacy, setShowPharmacy] = useState(false);
  const [showSecurity, setShowSecurity] = useState(false);
  const [showTeachingCenters, setShowTeachingCenters] = useState(false);
  const [showBanks, setShowBanks] = useState(false);
  const [showDiningModal, setShowDiningModal] = useState(false);
  const [showDiningSelection, setShowDiningSelection] = useState(false);
  const [showFuneralSelection, setShowFuneralSelection] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
  const [showShopping, setShowShopping] = useState(false);
  const [infraType, setInfraType] = useState<'essential' | 'transport' | 'materials' | 'taxi' | 'gas' | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Chào bạn! Tôi là Trợ lý Cư dân Hoài Nhơn Đông. Dòng sông Lại Giang hôm nay thật xanh biếc, tôi có thể hỗ trợ gì cho bạn không?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const EXT_CHAT_URL = "https://ai-chat-search-coral.vercel.app/";

  const categories: Category[] = [
    {
      title: "Thủ tục & Dịch vụ công",
      items: [
        { id: 'tthc', label: 'Thủ tục hành chính', icon: <ClipboardList className="w-6 h-6 text-emerald-600" />, color: 'bg-emerald-50' },
        { id: 'dvc', label: 'Dịch vụ công', icon: <FileText className="w-6 h-6 text-cyan-600" />, color: 'bg-cyan-50' },
        { id: 'lich_tiep_dan', label: 'Lịch tiếp dân', icon: <CalendarCheck className="w-6 h-6 text-indigo-600" />, color: 'bg-indigo-50' },
        { id: 'dv_khancap', label: 'Dịch vụ khẩn cấp', icon: <LifeBuoy className="w-6 h-6 text-rose-600" />, color: 'bg-rose-50' },
      ]
    },
    {
      title: "Y tế & Giáo dục",
      items: [
        { id: 'benhvien', label: 'Khám, chữa bệnh', icon: <Hospital className="w-6 h-6 text-red-600" />, color: 'bg-red-50' },
        { id: 'nhathuoc', label: 'Nhà thuốc', icon: <Pill className="w-6 h-6 text-teal-600" />, color: 'bg-teal-50' },
        { id: 'truonghoc', label: 'Trường học', icon: <GraduationCap className="w-6 h-6 text-amber-600" />, color: 'bg-amber-50' },
        { id: 'dayhoc', label: 'Trung tâm dạy học', icon: <BookOpen className="w-6 h-6 text-purple-600" />, color: 'bg-purple-50' },
      ]
    },
    {
      title: "Cơ sở hạ tầng thiết yếu",
      items: [
        { id: 'mua_sam', label: 'Mua sắm', icon: <ShoppingBag className="w-6 h-6 text-pink-600" />, color: 'bg-pink-50' },
        { id: 'cong_vien', label: 'Công viên', icon: <Trees className="w-6 h-6 text-green-600" />, color: 'bg-green-50' },
        { id: 'sua_dt', label: 'Sửa chữa điện thoại', icon: <Smartphone className="w-6 h-6 text-blue-600" />, color: 'bg-blue-50' },
        { id: 'di_chuyen', label: 'Di chuyển', icon: <Car className="w-6 h-6 text-slate-600" />, color: 'bg-slate-100' },
      ]
    },
    {
      title: "Du lịch & Giải trí & Lưu trú",
      items: [
        { id: 'ditich_thangcanh', label: 'Danh lam thắng cảnh', icon: <Mountain className="w-6 h-6 text-emerald-600" />, color: 'bg-emerald-50' },
        { id: 'khachsan', label: 'Khách sạn & Nhà nghỉ', icon: <Hotel className="w-6 h-6 text-indigo-600" />, color: 'bg-indigo-50' },
        { id: 'an_uong', label: 'Ăn uống', icon: <Utensils className="w-6 h-6 text-orange-600" />, color: 'bg-orange-50' },
        { id: 'karaoke', label: 'Karaoke', icon: <Music className="w-6 h-6 text-purple-600" />, color: 'bg-purple-50' },
      ]
    },
    {
      title: "Văn hóa & Di tích lịch sử",
      items: [
        { id: 'the_thao', label: 'Thể dục thể thao', icon: <Dumbbell className="w-6 h-6 text-blue-700" />, color: 'bg-blue-100' },
        { id: 'van_hoa', label: 'Văn hóa địa phương', icon: <Flower2 className="w-6 h-6 text-rose-600" />, color: 'bg-rose-50' },
        { id: 'di_tich', label: 'Di tích lịch sử', icon: <Landmark className="w-6 h-6 text-amber-700" />, color: 'bg-amber-100' },
        { id: 'mai_tang', label: 'Mai táng', icon: <Scroll className="w-6 h-6 text-slate-500" />, color: 'bg-slate-100' },
      ]
    },
    {
      title: "Doanh nghiệp & Tài chính",
      items: [
        { id: 'doanh_nghiep', label: 'Doanh nghiệp', icon: <Briefcase className="w-6 h-6 text-slate-700" />, color: 'bg-slate-100' },
        { id: 'ngan_hang', label: 'Ngân hàng', icon: <Landmark className="w-6 h-6 text-emerald-700" />, color: 'bg-emerald-50' },
        { id: 'tin_dung', label: 'Tín dụng & Quỹ', icon: <Wallet className="w-6 h-6 text-indigo-600" />, color: 'bg-indigo-50' },
        { id: 'bao_hiem', label: 'Bảo hiểm', icon: <Shield className="w-6 h-6 text-blue-600" />, color: 'bg-blue-50' },
      ]
    }
  ];

  const handleQuickAction = (label: string) => {
    switch (label) {
      case 'Giới thiệu':
        setShowAI(true);
        handleAssistantQuery("Hãy giới thiệu tổng quan về phường Hoài Nhơn Đông, tỉnh Bình Định.");
        break;
      case 'Bản đồ':
        window.open('https://maps.app.goo.gl/gfmGRbBZmeku8Qry7', '_blank');
        break;
      case 'Trụ sở':
        setShowSecurity(true);
        break;
      case 'Nhà văn hóa':
        setShowAI(true);
        handleAssistantQuery("Cho tôi danh sách các Nhà văn hóa của các tổ dân phố/khối tại phường Hoài Nhơn Đông.");
        break;
      default:
        break;
    }
  };

  const handleItemClick = (id: string, label: string) => {
    setSearchQuery('');
    if (id === 'dvc') window.open('https://dichvucong.gov.vn', '_blank');
    else if (id === 'tthc') {
      setShowAI(true);
      handleAssistantQuery("Hướng dẫn tôi các quy trình làm thủ tục hành chính tại phường Hoài Nhơn Đông (khai sinh, chứng thực, đất đai...)");
    }
    else if (id === 'lich_tiep_dan') setShowSchedule(true);
    else if (id === 'dv_khancap') setInfraType('essential');
    else if (id === 'benhvien') setShowMedical(true);
    else if (id === 'nhathuoc') setShowPharmacy(true);
    else if (id === 'truonghoc') setShowSchools(true);
    else if (id === 'dayhoc') setShowTeachingCenters(true);
    else if (id === 'di_chuyen') setInfraType('transport');
    else if (id === 'mua_sam') setShowShopping(true);
    else if (id === 'an_uong') setShowDiningSelection(true);
    else if (id === 'ngan_hang') setShowBanks(true);
    else if (id === 'mai_tang') setShowFuneralSelection(true);
    else {
      setShowAI(true);
      handleAssistantQuery(`Thông tin về ${label} tại phường Hoài Nhơn Đông`);
    }
  };

  const handleAssistantQuery = async (query: string) => {
    setIsLoading(true);
    const response = await getAssistantResponse(query);
    setMessages(prev => [...prev, { role: 'user', content: query }, { role: 'assistant', content: response || "Tôi đang xử lý..." }]);
    setIsLoading(false);
  };

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);
    const response = await getAssistantResponse(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: response || "Rất tiếc, tôi chưa tìm thấy thông tin." }]);
    setIsLoading(false);
  };

  return (
    <div className="w-full min-h-screen bg-slate-100 flex justify-center items-start lg:py-10 safe-top">
      <div className="w-full max-w-lg lg:max-w-2xl xl:max-w-3xl min-h-screen lg:min-h-0 lg:h-[90vh] lg:rounded-[40px] relative bg-[#f8fafc] overflow-hidden shadow-2xl flex flex-col border-x border-slate-200/50">
        <div className="flex-1 overflow-y-auto pb-28 scroll-smooth">
          <Header />
          <div className="px-4 sm:px-6 lg:px-10 -mt-8 relative z-20">
            <div className="mb-6 relative group">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
              </div>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm dịch vụ, địa điểm, ăn uống..." 
                className="w-full bg-white/90 backdrop-blur-xl border-none h-14 pl-14 pr-6 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] focus:ring-2 focus:ring-emerald-500/20 focus:bg-white transition-all text-[15px] font-medium placeholder:text-slate-400"
              />
            </div>

            <div className="mb-6 flex items-center gap-3 bg-emerald-600 text-white px-5 py-3 rounded-2xl shadow-lg animate-in slide-in-from-top-4 duration-700">
              <Megaphone className="w-5 h-5 animate-bounce" />
              <Marquee className="text-[11px] font-black uppercase tracking-widest">
                Lịch tiếp dân: Bí thư Đảng ủy (ngày 10, 20 hàng tháng); Chủ tịch HĐND phường (ngày 15 hàng tháng). Trân trọng thông báo!
              </Marquee>
            </div>

            <div className="bg-white/90 backdrop-blur-xl rounded-[32px] p-5 shadow-[0_20px_40px_rgba(0,0,0,0.06)] mb-10 flex justify-between items-center border border-white">
              {[
                { label: 'Giới thiệu', icon: <Info />, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                { label: 'Bản đồ', icon: <MapIcon />, color: 'text-rose-600', bg: 'bg-rose-50' },
                { label: 'Trụ sở', icon: <Building2 />, color: 'text-cyan-600', bg: 'bg-cyan-50' },
                { label: 'Nhà văn hóa', icon: <Home />, color: 'text-amber-600', bg: 'bg-amber-50' }
              ].map((item, i) => (
                <div key={i} onClick={() => handleQuickAction(item.label)} className="flex flex-col items-center cursor-pointer flex-1 transition-all active:scale-90">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-2 shadow-sm`}>
                    <div className={`${item.color}`}>{item.icon}</div>
                  </div>
                  <span className="text-[8px] sm:text-[10px] font-black text-slate-500 uppercase tracking-wider text-center">{item.label}</span>
                </div>
              ))}
            </div>
            
            <div className={`space-y-4 transition-all duration-500 ${searchQuery ? 'opacity-20 blur-[2px] pointer-events-none' : 'opacity-100 blur-0'}`}>
              {categories.map((cat, idx) => (
                <CategorySection key={idx} category={cat} onItemClick={handleItemClick} />
              ))}
            </div>
          </div>
        </div>

        <button 
          onClick={() => window.open(EXT_CHAT_URL, '_blank')} 
          className="fixed bottom-6 right-6 w-16 h-16 bg-emerald-600 text-white rounded-[24px] shadow-[0_10px_40px_rgba(5,150,105,0.4)] flex flex-col items-center justify-center hover:scale-110 active:scale-95 transition-all z-[100] border-[4px] border-white group"
        >
          <MessageSquareText className="w-7 h-7" />
          <span className="text-[8px] font-black uppercase tracking-tighter mt-0.5">AI CHAT</span>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
        </button>

        <OfficersModal isOpen={showOfficers} onClose={() => setShowOfficers(false)} />
        <MedicalModal isOpen={showMedical} onClose={() => setShowMedical(false)} />
        <SchoolsModal isOpen={showSchools} onClose={() => setShowSchools(false)} />
        <PharmacyModal isOpen={showPharmacy} onClose={() => setShowPharmacy(false)} />
        <SecurityModal isOpen={showSecurity} onClose={() => setShowSecurity(false)} />
        <DiningModal isOpen={showDiningModal} onClose={() => setShowDiningModal(false)} />
        <DiningSelectionModal isOpen={showDiningSelection} onClose={() => setShowDiningSelection(false)} onSelect={(id, label) => {
          setShowDiningSelection(false);
          if (id === 'quan_an') setShowDiningModal(true);
          else handleItemClick(id, label);
        }} />
        <FuneralSelectionModal isOpen={showFuneralSelection} onClose={() => setShowFuneralSelection(false)} onSelect={(id, label) => {
          setShowFuneralSelection(false);
          handleItemClick(id, label);
        }} />
        <ScheduleModal isOpen={showSchedule} onClose={() => setShowSchedule(false)} />
        <TeachingCentersModal isOpen={showTeachingCenters} onClose={() => setShowTeachingCenters(false)} />
        <BanksModal isOpen={showBanks} onClose={() => setShowBanks(false)} />
        <ShoppingModal isOpen={showShopping} onClose={() => setShowShopping(false)} onSelect={(id, label) => {
          setShowShopping(false);
          handleItemClick(id, label);
        }} />
        <InfrastructureModal isOpen={infraType !== null} onClose={() => setInfraType(null)} type={infraType as any} />
        
        {showAI && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[150] flex flex-col p-0 lg:p-4 animate-in fade-in">
            <div className="mt-auto lg:mt-0 bg-white rounded-t-[48px] lg:rounded-[48px] w-full lg:max-w-2xl h-[90vh] flex flex-col shadow-2xl overflow-hidden self-center">
              <div className="px-8 py-8 border-b flex items-center justify-between bg-emerald-50/30">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white"><MessageSquareText /></div>
                  <div><h3 className="font-black text-slate-800">Trợ lý Cư dân Số</h3><span className="text-[9px] text-green-700 font-black uppercase">Đang trực tuyến</span></div>
                </div>
                <button onClick={() => setShowAI(false)} className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center"><X /></button>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-4 rounded-3xl ${msg.role === 'user' ? 'bg-emerald-600 text-white rounded-br-none' : 'bg-white text-slate-700 rounded-tl-none border shadow-sm'}`}>
                      <p className="text-[14px] leading-relaxed">{msg.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && <Loader2 className="w-6 h-6 animate-spin text-emerald-600 mx-auto" />}
                <div ref={chatEndRef} />
              </div>
              <div className="p-6 bg-white border-t pb-12">
                <div className="flex gap-3 bg-slate-100 rounded-3xl px-4 py-2">
                  <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()} placeholder="Hỏi tôi về thủ tục, địa điểm..." className="flex-1 bg-transparent py-3 text-sm focus:outline-none" />
                  <button onClick={handleSendMessage} className="bg-emerald-600 text-white w-10 h-10 rounded-2xl flex items-center justify-center"><Send className="w-5 h-5" /></button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
