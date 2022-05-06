import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useSelector } from "react-redux";

SwiperCore.use([Navigation, Pagination]);

const outerStyle = {
  height: "10em",
  fontSize: "1rem",
  lineHeight: 1.5,
  display: "flex",
};

const innerStyle = {
  width: "10em",
  border: "1px solid teal",
  borderRadius: ".25rem",
  margin: "0 auto",
};

function MakeSurbeySwiperPage({ index }) {
  const editQuestions = useSelector((state) => state.editReducer);

  return (
    <div>
      <Swiper
        className="banner"
        spaceBetween={50}
        slidesPerView={1}
        initialSlide={index}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div style={outerStyle}>
            <div style={innerStyle}>가운데 정렬 좀 시켜주세요.</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MakeSurbeySwiperPage;
