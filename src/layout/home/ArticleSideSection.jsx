//REACT
import React from 'react'

//COMPONENT
import ArticleCard from "../../components/cards/ArticleCard";

//JSON TEST
import ArticleTest from "../../assets/json/Article.json";
import ArticleSideCard from '../../components/cards/ArticleSideCard';

function ArticleSideSection() {
  return (
    <section className="hidden lg:flex flex-col w-1/2">
        {ArticleTest.slice(8).map((item, index) => (
            <ArticleSideCard
              key={index} // Assicurati di fornire una chiave unica per ogni elemento
              title={item.title}
              tag={item.tag}
              category={item.category}
              comment={item.comment}
            />
          ))}
    </section>
  )
}

export default ArticleSideSection