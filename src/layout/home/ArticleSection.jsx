//REACT
import React, { useRef, useState } from "react";

//COMPONENT
import ArticleCard from "../../components/cards/ArticleCard";

//JSON TEST
import ArticleTest from "../../assets/json/Article.json";

function ArticleSection() {
  const firstArticle = ArticleTest.at(0);

  return (
    <section className="border-third border-t-4 border-b-4 overflow-x-auto">
      <ArticleCard
        title={firstArticle.title}
        tag={firstArticle.tag}
        category={firstArticle.category}
        comment={firstArticle.comment}
        main={true}
      />
      <div id="carousel" className="flex flex-row flex-nowrap overflow-x-auto p-4 gap-4 snap-x">
        {ArticleTest.slice(1).map((item, index) => (
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
    </section>
  );
}

export default ArticleSection;
