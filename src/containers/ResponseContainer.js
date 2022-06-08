import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getQuestions } from "../modules/getQuestion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import ResponseAnswerSwiper from "../components/responseAnswerSwiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import SubmitAnswerSurvey from "../components/submitAnswerSurvey";

const outerStyle = {
  height: "100vh",
  fontSize: "1rem",
  lineHeight: 1.5,
  display: "flex",
};

SwiperCore.use([Navigation, Pagination]);

function ResponseContainer({ surveyId }) {
  const swiperRef = React.useRef(null);
  const dispatch = useDispatch();
  const [answers, setAnswers] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const { questions, loading, error } = useSelector(
    (state) => state.responseReducer.question
  ) || {
    loading: false,
    questions: null,
    error: null,
  };

  useEffect(() => {
    dispatch(getQuestions(surveyId));
  }, [surveyId, dispatch]);

  useEffect(() => {
    questions &&
      setAnswers(() => {
        return new Array(questions.data.length).fill(0);
      });
  }, [questions]);

  if (loading && !questions) return <div>로딩중...</div>; // 로딩중이면서, 데이터가 없을 때에만 로딩중... 표시
  if (error) return <div>에러 발생!</div>;
  if (!questions) return null;

  const goNext = () => {
    //다음 페이지로 자동으로 넘어가게 함
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const selectAnswer = (index, answerId) => {
    const ansArray = [...answers];
    ansArray[index] = answerId; //만약 이후 수정 기능을 도입한다면, index가 아니라 ansid 를 저장해서 어떤 질문에 대해 답을 했는지 알아야 할듯.
    setAnswers(() => ansArray);
    console.log(answers);
  };

  return (
    <>
      <Swiper
        ref={swiperRef}
        className="banner"
        spaceBetween={50}
        slidesPerView={1}
        allowTouchMove={false}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => {
          setActiveIndex(() => swiper.activeIndex);
        }}
      >
        {questions.data.map((question, index) => (
          <SwiperSlide key={question.id}>
            <div style={outerStyle}>
              <ResponseAnswerSwiper
                index={index}
                question={question}
                goNext={goNext}
                selectAnswer={selectAnswer}
                isCurrent={activeIndex === index}
              />
            </div>
          </SwiperSlide>
        ))}

        <SwiperSlide>
          <div style={outerStyle}>
            <SubmitAnswerSurvey />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ResponseContainer;
