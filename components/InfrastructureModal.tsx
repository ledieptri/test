
import React from 'react';
import { X, Zap, Droplets, Fuel, Truck, Construction, Phone, AlertCircle, Info, Siren, Car, ArrowRight } from 'lucide-react';

interface InfrastructureModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'essential' | 'transport' | 'materials';
}

const InfrastructureModal: React.FC<InfrastructureModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  // Dữ liệu cho các mục thông thường (Thiết yếu và Vật liệu)
  const commonData = {
    essential: {
      title: "Dịch vụ Thiết yếu (Phản ứng nhanh)",
      icon: <AlertCircle />,
      color: "from-orange-600 to-red-700",
      items: [
        { name: "Sửa chữa Điện (Hoài Nhơn)", phone: "19001909", icon: <Zap /> },
        { name: "Cấp thoát nước", phone: "0256.3861.456", icon: <Droplets /> },
        { name: "Cứu hỏa / PCCC", phone: "114", icon: <Siren /> },
        { name: "Cấp cứu y tế", phone: "115", icon: <Siren /> },
        { name: "Phòng chống thiên tai", phone: "0256.3861.000", icon: <Info /> },
        { name: "Phòng chống dịch bệnh", phone: "0256.3861.115", icon: <Info /> },
      ]
    },
    materials: {
      title: "Vật liệu xây dựng & HTX",
      icon: <Construction />,
      color: "from-slate-700 to-slate-900",
      items: [
        { name: "Cửa hàng VLXD Thanh Bình", phone: "0914.123.456", icon: <Construction /> },
        { name: "Hợp tác xã Nông nghiệp 1", phone: "0256.3861.555", icon: <Construction /> },
        { name: "Hợp tác xã Nông nghiệp 2", phone: "0256.3861.666", icon: <Construction /> },
      ]
    }
  };

  // Dữ liệu riêng cho mục Di chuyển (Transport) với giao diện Logo lớn
  const transportOptions = [
    { 
      id: 'taxi', 
      label: 'Taxi Hoài Nhơn', 
      icon: <Car className="w-6 h-6" />, 
      color: 'bg-blue-50 text-blue-600', 
      desc: 'Gọi xe nhanh, Taxi Mai Linh & địa phương',
      phone: '0256.38.38.38.38'
    },
    { 
      id: 'gas', 
      label: 'Cây xăng gần đây', 
      icon: <Fuel className="w-6 h-6" />, 
      color: 'bg-amber-50 text-amber-600', 
      desc: 'Cửa hàng xăng dầu Hoài Hương & lân cận',
      phone: '0256.3861.333'
    },
  ];

  if (type === 'transport') {
    return (
      <div className="fixed inset-0 z-[120] flex flex-col lg:items-center lg:justify-center bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
        <div className="mt-auto lg:mt-0 w-full lg:max-w-md bg-white rounded-t-[40px] lg:rounded-[40px] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-10 duration-500">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-800 p-8 text-white relative">
            <button onClick={onClose} className="absolute top-6 right-6 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center transition-all">
              <X className="w-5 h-5"/>
            </button>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                <Car className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-black uppercase tracking-tight">Dịch vụ Di chuyển</h2>
              <p className="text-blue-100 text-[10px] font-bold uppercase tracking-widest opacity-80">Phương tiện & Nhiên liệu</p>
            </div>
          </div>
          
          <div className="p-6 space-y-3 bg-slate-50">
            {transportOptions.map((item) => (
              <a 
                key={item.id} 
                href={`tel:${item.phone.replace(/\./g, '')}`}
                className="w-full bg-white p-4 rounded-2xl border border-slate-100 flex items-center justify-between shadow-sm hover:border-blue-200 transition-all group active:scale-[0.98]"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center`}>
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <span className="block text-[14px] font-black text-slate-700 uppercase tracking-tight">{item.label}</span>
                    <span className="text-[11px] text-slate-400 font-medium">{item.desc}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">GỌI NGAY</span>
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 transition-all" />
                </div>
              </a>
            ))}
          </div>
          
          <div className="p-6 bg-white border-t text-center">
            <button onClick={onClose} className="text-[11px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-colors">Đóng</button>
          </div>
        </div>
      </div>
    );
  }

  // Giao diện cho các mục khác (Thiết yếu & Vật liệu)
  const current = commonData[type as keyof typeof commonData];

  return (
    <div className="fixed inset-0 z-[120] flex flex-col lg:items-center lg:justify-center bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
      <div className="mt-auto lg:mt-0 w-full lg:max-w-md bg-white rounded-t-[40px] lg:rounded-[40px] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-10 duration-500">
        <div className={`bg-gradient-to-br ${current.color} p-8 text-white relative`}>
          <button onClick={onClose} className="absolute top-6 right-6 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center"><X className="w-5 h-5"/></button>
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">{current.icon}</div>
            <h2 className="text-xl font-black uppercase tracking-tight leading-tight">{current.title}</h2>
          </div>
        </div>
        <div className="p-6 space-y-3 bg-slate-50">
          {current.items.map((item, i) => (
            <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 flex justify-between items-center shadow-sm">
              <div className="flex items-center gap-3">
                <div className="text-slate-400">{item.icon}</div>
                <span className="text-[13px] font-bold text-slate-700">{item.name}</span>
              </div>
              <a href={`tel:${item.phone.replace(/\./g, '')}`} className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-indigo-600 active:scale-90 transition-transform">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
        <div className="p-6 bg-white border-t">
          <button onClick={onClose} className="w-full py-3 text-[12px] font-black text-slate-400 uppercase tracking-widest">Đóng</button>
        </div>
      </div>
    </div>
  );
};

export default InfrastructureModal;
