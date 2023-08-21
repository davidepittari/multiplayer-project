//REACT
import React from "react";

import newsTest from "../../assets/json/News.json";
import NewsCard from "../../components/cards/NewsCard";
import AdsPlace from "../../components/other/AdsPlace";

function NewsSection() {
  const newsChunks = [
    newsTest.slice(0, 10),
    newsTest.slice(10, 16),
    newsTest.slice(16, 20),
    newsTest.slice(20, 30),
    newsTest.slice(30),
  ];

  return (
    <section>
      {newsChunks.map((chunk, chunkIndex) => (
        <div key={chunkIndex}>
          {chunk.map((news, newsIndex) => (
            <React.Fragment key={newsIndex}>
              <NewsCard
                comment={news.comment}
                timing={news.timing}
                category={news.category}
                tag={news.tag}
                imagePresent={chunkIndex <= 3}
                title={news.title}
              />
            </React.Fragment>
          ))}
          {chunkIndex !== chunk.length - 1 && (
            <AdsPlace/>
          )}
        </div>
      ))}
    </section>
  );
}

export default NewsSection;
