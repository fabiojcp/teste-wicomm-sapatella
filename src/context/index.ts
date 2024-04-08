import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension";

interface StoreProps {
  likes: number;
  updateLikes: (by: number) => void;
  bag: number;
  updateBag: (by: number) => void;
}

const useStoreContext = create<StoreProps>()((set) => ({
  likes: 0,
  updateLikes: (by) => set((state) => ({ likes: state.likes + by })),
  bag: 0,
  updateBag: (by) => set((state) => ({ bag: state.bag + by })),
}));

export default useStoreContext;
