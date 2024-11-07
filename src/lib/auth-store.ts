import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from './types';
import { mockUsers } from './mock-data';

interface AuthState {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (email: string, name: string, password: string) => Promise<boolean>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      login: async (email: string, password: string) => {
        // Simulate API call
        const user = mockUsers.find((u) => u.email === email);
        if (user) {
          set({ user });
          return true;
        }
        return false;
      },
      logout: () => {
        set({ user: null });
      },
      register: async (email: string, name: string, password: string) => {
        // Simulate API call
        const newUser: User = {
          id: String(mockUsers.length + 1),
          email,
          name,
          role: 'user',
        };
        mockUsers.push(newUser);
        set({ user: newUser });
        return true;
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);