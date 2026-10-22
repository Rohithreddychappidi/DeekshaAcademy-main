import { create } from 'zustand';

interface UIState {
  isMenuOpen: boolean;
  isContactModalOpen: boolean;
  isConsultationModalOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  openMenu: () => void;
  openContactModal: () => void;
  closeContactModal: () => void;
  openConsultationModal: () => void;
  closeConsultationModal: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isMenuOpen: false,
  isContactModalOpen: false,
  isConsultationModalOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
  openMenu: () => set({ isMenuOpen: true }),
  openContactModal: () => set({ isContactModalOpen: true }),
  closeContactModal: () => set({ isContactModalOpen: false }),
  openConsultationModal: () => set({ isConsultationModalOpen: true }),
  closeConsultationModal: () => set({ isConsultationModalOpen: false }),
}));

interface CartItem {
  courseId: string;
  courseName: string;
  price: number;
}

interface CartState {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (courseId: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getItemCount: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addToCart: (item) =>
    set((state) => {
      const exists = state.items.find((i) => i.courseId === item.courseId);
      if (exists) return state;
      return { items: [...state.items, item] };
    }),
  removeFromCart: (courseId) =>
    set((state) => ({
      items: state.items.filter((item) => item.courseId !== courseId),
    })),
  clearCart: () => set({ items: [] }),
  getTotalPrice: () => get().items.reduce((sum, item) => sum + item.price, 0),
  getItemCount: () => get().items.length,
}));

interface FilterState {
  selectedCategory: string;
  selectedLevel: string;
  searchQuery: string;
  setSelectedCategory: (category: string) => void;
  setSelectedLevel: (level: string) => void;
  setSearchQuery: (query: string) => void;
  reset: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  selectedCategory: '',
  selectedLevel: '',
  searchQuery: '',
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSelectedLevel: (level) => set({ selectedLevel: level }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  reset: () => set({ selectedCategory: '', selectedLevel: '', searchQuery: '' }),
}));

interface NotificationState {
  notifications: Array<{
    id: string;
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
  }>;
  addNotification: (message: string, type: 'success' | 'error' | 'info' | 'warning') => void;
  removeNotification: (id: string) => void;
}

export const useNotificationStore = create<NotificationState>((set) => ({
  notifications: [],
  addNotification: (message, type) =>
    set((state) => ({
      notifications: [
        ...state.notifications,
        {
          id: Math.random().toString(36).substr(2, 9),
          message,
          type,
        },
      ],
    })),
  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((notif) => notif.id !== id),
    })),
}));
