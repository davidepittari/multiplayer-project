//REACT
import React from "react";

//COMPONENTS
import ArticleSection from "./home/ArticleSection";
import NewsSection from "./home/NewsSection";
import Footer from "./Footer";
import ArticleSideSection from "./home/ArticleSideSection";
import UtilitySideSection from "./home/UtilitySideSection";

function Main() {
  return (
    <main className="flex flex-col lg:items-center">
      <ArticleSection />
      <div className="flex flex-row mt-2 lg:w-[1140px]">
        <NewsSection />
        <div className="w-full flex flex-row">
          <ArticleSideSection />
          <UtilitySideSection />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Main;
