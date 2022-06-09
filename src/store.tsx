import create from "zustand";
import { persist } from "zustand/middleware";
import { ComponentProps as CardProps } from "./components/card";
import { ComponentProps as CardGroupProps } from "./components/card-group";

interface StoreState {
  data: Array<CardGroupProps>;
  addCard: (groupId: number, cardItem: Omit<CardProps, "onAction">) => void;
  removeCard: (groupId: number, cardId: number) => void;
  addGroup: (groupItem: any) => void;
  removeGroup: (groupId: number) => void;
}
export const useStore = create(
  persist<StoreState>(
    (set, get) => ({
      data: [],
      addCard: (groupId, cardItem) =>
        set((state) => {
          const temp = (state.data[groupId]?.cards || []).slice();
          state.data[groupId].cards = [...temp, cardItem];
          return {
            data: state.data,
          };
        }),
      removeCard: (groupId, cardId) =>
        set((state) => {
          state.data[groupId].cards.splice(cardId, 1);
          return {
            data: state.data,
          };
        }),
      addGroup: (groupItem) =>
        set((state) => {
          state.data = [...state.data, groupItem];
          return {
            data: state.data,
          };
        }),
      removeGroup: (groupId) =>
        set((state) => {
          state.data.splice(groupId, 1);
          return {
            data: state.data,
          };
        }),
    }),
    {
      name: "project-manager",
      getStorage: () => localStorage,
    }
  )
);
