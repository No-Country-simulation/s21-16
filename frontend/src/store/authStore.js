import { create } from "zustand";

const useAuthStore = create((set) => ({
  token: localStorage.getItem("token") || null,
  user: null,

  login: (token, user) => {
    set({ token, user });

    localStorage.setItem("token", token);
  },
  logout: () => {
    set({ token: null, user: null });

    localStorage.removeItem("token");
  },
}));

export default useAuthStore;
