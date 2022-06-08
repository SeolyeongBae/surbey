import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";
import EditQuestionSwiper from "../components/editQuestionSwiper";
import { editAnswer, editQuestion, editTime } from "../modules/editQuestion";

const outerStyle = {
  height: "25em",
  fontSize: "1rem",
  lineHeight: 1.5,
  display: "flex",
};

SwiperCore.use([Navigation, Pagination]);

function MakeSurbeySwiperContainer({ focusIndex }) {
  const dispatch = useDispatch();
  const [timeCount, setTimeCount] = useState(0);

  const editQuestions = useSelector((state) => state.editReducer);
  const onEdit = (id, text) => dispatch(editQuestion(id, text)); //질문 수정
  const onEditTime = (id, time) => dispatch(editTime(id, time)); //질문 수정
  const onEditAnswer = (questionId, answerId, text) =>
    dispatch(editAnswer(questionId, answerId, text)); //답변 수정

  const onChange = (e) => {
    setTimeCount(1 - timeCount);
    onEditTime(parseInt(e.target.name), timeCount);
    console.log(editQuestions);
  };

  return (
    <div>
      <Swiper
        className="banner"
        spaceBetween={50}
        slidesPerView={1}
        initialSlide={focusIndex}
        navigation
        allowTouchMove={false}
        pagination={{ clickable: true }}
      >
        {editQuestions &&
          editQuestions.map((question, index) => (
            <SwiperSlide key={question.id}>
              <div style={outerStyle}>
                <EditQuestionSwiper
                  index={index}
                  question={question}
                  onEdit={onEdit}
                  onChange={onChange}
                  onEditAnswer={onEditAnswer}
                  timeCount={timeCount}
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default MakeSurbeySwiperContainer;
