//REACT
import React from "react";

import newsTest from "../../assets/json/News.json";
import NewsCard from "../../components/cards/NewsCard";
import AdsPlace from "../../components/other/AdsPlace";
import Button from "../../components/buttons/Button";

function NewsSection() {
  const newsChunks = [
    newsTest.slice(0, 10),
    newsTest.slice(10, 16),
    newsTest.slice(16, 20),
    newsTest.slice(20, 30),
    newsTest.slice(30),
  ];

  return (
    <>
      <section id="mobile" className="p-4 md:border-r lg:border-primary w-full lg:hidden">
        {newsChunks.map((chunk, chunkIndex) => (
          <div
            key={chunkIndex}
            className="flex flex-row flex-wrap md:flex-col "
          >
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
            {chunkIndex !== newsChunks.length - 1 && <AdsPlace />}
          </div>
        ))}
        <div className="flex justify-center">
          <Button>LEGGI LE ALTRE NOTIZIE</Button>
        </div>
      </section>
      <section id="desktop" className="p-4 md:border-r lg:border-primary w-full hidden lg:block">
          <div className="flex flex-row flex-wrap md:flex-col">
            {newsTest.map((news, newsIndex) => (
              <React.Fragment key={newsIndex}>
                <NewsCard
                  comment={news.comment}
                  timing={news.timing}
                  category={news.category}
                  tag={news.tag}
                  imagePresent={true}
                  title={news.title}
                />
              </React.Fragment>
            ))}
          </div>
      </section>
    </>
  );
}

export default NewsSection;
