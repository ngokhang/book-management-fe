// src/stores/global-store.ts
import IBook from "@/interfaces/IBook";
import ICategory from "@/interfaces/ICategory";
import IResponse from "@/interfaces/IResponse";
import { getBooks } from "@/services/books";
import { getCategories } from "@/services/categories";
import { createStore } from "zustand/vanilla";

export type GlobalState = {
  loading: boolean;
  categories: ICategory[];
  books: IResponse<IBook>;
};

export type GlobalActions = {
  toggleLoading: () => void;
  getCategoriesAndBooks: () => Promise<void>;
};

export type GlobalStore = GlobalState & GlobalActions;

export const defaultInitState: GlobalState = {
  loading: true,
  categories: [],
  books: { currentPage: 0, docs: [], totalDocs: 0, totalPages: 0 },
};

export const createGlobalStore = (
  initState: GlobalState = defaultInitState
) => {
  return createStore<GlobalStore>()((set) => ({
    ...initState,
    toggleLoading: () => set((state) => ({ loading: !state.loading })),
    getCategoriesAndBooks: async () => {
      try {
        set({ loading: true });
        const categoriesResponse = await getCategories();
        const booksResponse = await getBooks();
        const {
          data: { docs: listCategories },
        } = categoriesResponse;
        const {
          data: {
            docs: listBooks,
            totalDocs: totalDocsBooks,
            totalPages: totalPagesBooks,
          },
        } = booksResponse;
        set({
          categories: listCategories,
          books: {
            docs: listBooks,
            currentPage: 1,
            totalDocs: totalDocsBooks,
            totalPages: totalPagesBooks,
          },
        });
      } catch (error) {
        // handle errors....
      } finally {
        set({ loading: false });
      }
    },
    getBooks: async () => {},
  }));
};
