import create from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist((set) => ({
    items: [],
    userId: null,
    addItem: (item, quantity = 1) =>
      set((state) => {
        const exist = state.items.find((x) => x._id === item._id);
        return {
          ...state,
          items: exist
            ? state.items.map((x) => {
                return x._id === item._id
                  ? { ...item, quantity: x.quantity + quantity }
                  : x;
              })
            : [...state.items, { ...item, quantity: quantity }],
        };
      }),
    removeItem: (item) =>
      set((state) => {
        return {
          ...state,
          items: state.items.filter((x) => x._id !== item._id),
        };
      }),
    clearCart: () => set((state) => ({ ...state, items: [] })),
  }))
);
export default useStore;
