import { create } from "zustand";
import { customerInterface } from "../types";

interface useManageUserModalStorage {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  user: customerInterface | null;
  setUser: (user: customerInterface) => void;
}

export const useManageUserModal = create<useManageUserModalStorage>((set) => ({
  isOpen: false,
  onOpen: () =>
    set({
      isOpen: true,
    }),
  onClose: () =>
    set({
      isOpen: false,
    }),
  user: null,
  setUser: (user) =>
    set({
      user: user,
    }),
}));

