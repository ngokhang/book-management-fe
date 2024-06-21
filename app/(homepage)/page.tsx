"use client";

import BookList from "@/components/BookList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import {
  GlobalStoreProvider,
  useGlobalStore,
} from "@/providers/global-store-provider";
import { useEffect } from "react";
import Loading from "./loading";

export default function Home() {
  const { categories, getCategoriesAndBooks, loading, books } = useGlobalStore(
    (state) => state
  );

  const callApi = async () => {
    try {
      await getCategoriesAndBooks();
    } catch (error) {}
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <GlobalStoreProvider>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <section className="flex flex-wrap gap-4 pt-10">
            <Sidebar listCategories={categories} />
            <BookList booksData={books} />
          </section>
          <Footer />
        </>
      )}
    </GlobalStoreProvider>
  );
}
