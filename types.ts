
import { ReactNode } from 'react';

export interface MenuItem {
  id: string;
  label: string;
  icon: ReactNode;
  color: string;
}

export interface Category {
  title: string;
  items: MenuItem[];
}

export type TabType = 'home' | 'notifications' | 'assistant' | 'profile';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
