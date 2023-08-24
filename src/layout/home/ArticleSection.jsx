//REACT
import React, { useRef, useState } from "react";

//COMPONENT
import ArticleCard from "../../components/cards/ArticleCard";

//JSON TEST
import ArticleTest from "../../assets/json/Article.json";

function ArticleSection() {
  const firstArticle = ArticleTest.at(0);

  return (
    <section className="border-third border-t-4 border-b-4 lg:border-b-0 overflow-x-auto lg:max-w-[1140px]">
      <div id="mobile" className="lg:hidden">
        <ArticleCard
          title={firstArticle.title}
          tag={firstArticle.tag}
          category={firstArticle.category}
          comment={firstArticle.comment}
          main={true}
        />
        <div
          id="carousel"
          className="flex flex-row flex-nowrap overflow-x-auto p-4 gap-4 snap-x"
        >
          {ArticleTest.slice(1, 7).map((item, index) => (
            <ArticleCard
              key={index} // Assicurati di fornire una chiave unica per ogni elemento
              title={item.title}
              tag={item.tag}
              category={item.category}
              comment={item.comment}
              main={false}
            />
          ))}
        </div>
      </div>
      <div id="desktop" className="hidden lg:flex flex-col lg:mt-12">
        <div className="flex flex-row">
          {ArticleTest.slice(0, 3).map((item, index) => (
            <div>
              <ArticleCard
                key={index} // Assicurati di fornire una chiave unica per ogni elemento
                title={item.title}
                tag={item.tag}
                category={item.category}
                comment={item.comment}
                main={true}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-row">
          {ArticleTest.slice(3, 7).map((item, index) => (
            <ArticleCard
              key={index} // Assicurati di fornire una chiave unica per ogni elemento
              title={item.title}
              tag={item.tag}
              category={item.category}
              comment={item.comment}
              main={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ArticleSection;
