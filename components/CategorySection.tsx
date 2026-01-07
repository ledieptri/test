
import React from 'react';
import { Category } from '../types';

interface CategorySectionProps {
  category: Category;
  onItemClick?: (id: string, label: string) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category, onItemClick }) => {
  return (
    <div className="mb-8 lg:mb-12">
      <div className="flex items-center gap-2 mb-6 px-1">
        <div className="w-1.5 h-6 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
        <h2 className="text-[16px] sm:text-[18px] font-black text-slate-800 tracking-tight">{category.title}</h2>
      </div>
      
      {/* Responsive Grid: 4 cột trên mobile, 5 cột trên tablet, 6 cột trên desktop lớn */}
      <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 gap-y-8 gap-x-2 sm:gap-x-4">
        {category.items.map((item) => (
          <div 
            key={item.id} 
            onClick={() => onItemClick?.(item.id, item.label)}
            className="flex flex-col items-center group cursor-pointer transition-all duration-300"
          >
            <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-[24px] sm:rounded-[28px] ${item.color} flex items-center justify-center mb-3 shadow-sm border border-white/60 group-active:scale-90 group-hover:shadow-lg group-hover:-translate-y-1 transition-all`}>
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
            </div>
            <span className="text-[9px] sm:text-[11px] font-bold text-slate-600 text-center leading-tight px-1 uppercase tracking-tight group-hover:text-emerald-600 transition-colors">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
