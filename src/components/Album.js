import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/album.css";

SwiperCore.use([Navigation, Pagination]);

function Album({ posts }) {
  return (
    <Swiper
      spaceBetween={40}
      slidesOffsetBefore={50}
      slidesOffsetAfter={100}
      slidesPerView={3}
      scrollbar={{ draggable: true }}
      navigation
      breakpoints={{
        768: {
          slidesPerView: 5,
        },
      }}
    >
      {posts.map((post) => (
        <SwiperSlide>
          <div key={post.id} className="center">
            <img src={post.thumbnailUrl}></img>
            <div className="text_center"> Title : {post.title}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Album;
