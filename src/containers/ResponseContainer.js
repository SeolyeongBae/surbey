import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getQuestions } from "../modules/getQuestion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import ResponseAnswerSwiper from "../components/responseAnswerSwiper";

const outerStyle = {
  height: "15em",
  fontSize: "1rem",
  lineHeight: 1.5,
  display: "flex",
};

SwiperCore.use([Navigation, Pagination]);

function ResponseContainer({ postId }) {
  const { questions, loading, error } = useSelector(
    (state) => state.responseReducer.question
  ) || {
    loading: false,
    questions: null,
    error: null,
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestions(postId));
  }, [postId, dispatch]);

  if (loading && !questions) return <div>로딩중...</div>; // 로딩중이면서, 데이터가 없을 때에만 로딩중... 표시
  if (error) return <div>에러 발생!</div>;
  if (!questions) return null;

  return (
    <>
      <Swiper
        className="banner"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        allowTouchMove={false}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div style={outerStyle}>
            <ResponseAnswerSwiper index={1} question={questions} />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ResponseContainer;
