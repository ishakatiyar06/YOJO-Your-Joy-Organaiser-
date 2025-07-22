export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  eventType?: string;
  products?: Product[];
  items?: EventItem[];
  budget?: BudgetBreakdown;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  link: string;
  image: string;
  category: string;
  rating?: number;
  reviews?: number;
  inStock?: boolean;
  prime?: boolean;
}

export interface EventItem {
  id: string;
  name: string;
  category: string;
  essential: boolean;
  price: string;
  quantity: string;
  description: string;
  alternatives?: string[];
  diyOption?: string;
  link?: string;
  image?: string;
}

export interface BudgetBreakdown {
  total: number;
  categories: {
    [key: string]: {
      allocated: number;
      spent: number;
      items: string[];
    };
  };
}

export interface EventPreferences {
  eventType: string;
  theme?: string;
  colors: string[];
  guestCount?: number;
  budget?: string;
  venue?: string;
}