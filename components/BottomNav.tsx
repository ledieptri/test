
import React from 'react';
import { Home, Bell, MessageSquareText, User } from 'lucide-react';
import { TabType } from '../types';

interface BottomNavProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-4 flex justify-between items-center safe-bottom z-50 rounded-t-3xl shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
      <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center gap-1 ${activeTab === 'home' ? 'text-blue-600' : 'text-gray-400'}`}>
        <Home className={`w-6 h-6 ${activeTab === 'home' ? 'fill-blue-100' : ''}`} />
        <span className="text-[10px] font-bold">Khám phá</span>
      </button>
      
      <button onClick={() => setActiveTab('notifications')} className={`flex flex-col items-center gap-1 ${activeTab === 'notifications' ? 'text-blue-600' : 'text-gray-400'}`}>
        <div className="relative">
          <Bell className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </div>
        <span className="text-[10px] font-bold">Thông báo</span>
      </button>

      <button onClick={() => setActiveTab('assistant')} className={`flex flex-col items-center gap-1 ${activeTab === 'assistant' ? 'text-blue-600' : 'text-gray-400'}`}>
        <div className={`p-3 rounded-2xl -mt-10 shadow-lg ${activeTab === 'assistant' ? 'bg-blue-600 text-white shadow-blue-300' : 'bg-white text-gray-400'}`}>
          <MessageSquareText className="w-6 h-6" />
        </div>
        <span className="text-[10px] font-bold mt-1">Trợ lý AI</span>
      </button>

      <button onClick={() => setActiveTab('profile')} className={`flex flex-col items-center gap-1 ${activeTab === 'profile' ? 'text-blue-600' : 'text-gray-400'}`}>
        <User className="w-6 h-6" />
        <span className="text-[10px] font-bold">Cá nhân</span>
      </button>
    </div>
  );
};

export default BottomNav;
