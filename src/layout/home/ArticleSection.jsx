//REACT
import React, { useRef, useState } from "react";

//COMPONENT
import ArticleCard from "../../components/cards/ArticleCard";

//SWIPER
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./ArticleSection.css";

// import required modules
import { Pagination, Scrollbar } from "swiper/modules";

//JSON TEST
import newsTest from "../../assets/json/News.json";

function ArticleSection() {
  const firstArticle = newsTest.at(0);

  return (
    <section className="border-third border-t-4 border-b-4 bg-sixth overflow-x-auto">
      <ArticleCard
        title={firstArticle.title}
        tag={firstArticle.tag}
        category={firstArticle.category}
        comment={firstArticle.comment}
      />
      <Swiper
        slidesPerView={1.2}
        spaceBetween={0}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {newsTest.slice(1).map((item, index) => (
          <SwiperSlide>
            {" "}
            <ArticleCard
              key={index} // Assicurati di fornire una chiave unica per ogni elemento
              title={item.title}
              tag={item.tag}
              category={item.category}
              comment={item.comment}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ArticleSection;
