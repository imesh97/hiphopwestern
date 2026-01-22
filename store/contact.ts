// store.ts
import { create } from "zustand";

interface BearState {
  // Data
  name: string;
  email: string;
  msg: string;
  // Actions
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setMsg: (msg: string) => void;
  resetForm: () => void;
}

export const useBearStore = create<BearState>()((set) => ({
  name: "",
  email: "",
  msg: "",

  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setMsg: (msg) => set({ msg }),

  resetForm: () => set({ name: "", email: "", msg: "" }),
}));
