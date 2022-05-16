import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";
import EditQuestionDetail from "../components/editQuestionDetail";
import EditAnswerDetail from "../components/editAnswerDetail";
import { editAnswer, editQuestion } from "../modules/editQuestion";
import { useLocation } from "react-router-dom";

SwiperCore.use([Navigation, Pagination]);

const outerStyle = {
  height: "15em",
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
  const dispatch = useDispatch();
  const location = useLocation();

  const [timeCount, setTimeCount] = useState(0);

  const editQuestions = useSelector((state) => state.editReducer);
  const onEdit = (id, text) => dispatch(editQuestion(id, text)); //질문 수정
  const onEditAnswer = (questionId, answerId, text) =>
    dispatch(editAnswer(questionId, answerId, text)); //답변 수정

  const onSubmit = async (event) => {
    event.preventDefault();
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setTimeCount(value);
  };

  const focusIndex =
    location.state.focusIndex == null ? 1 : location.state.focusIndex;
  //새로고침하면 안되는 이유 : 스토어에 들어있는게 날아감.

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
            <SwiperSlide>
              <div key={question.id} style={outerStyle}>
                <div style={innerStyle}>
                  <div> Q{index} </div>
                  <EditQuestionDetail
                    question={question}
                    onEdit={onEdit}
                    id={question.id}
                  />

                  <form onSubmit={onSubmit}>
                    <input
                      type="question"
                      value={timeCount}
                      placeholder="0"
                      required
                      onChange={onChange}
                    />
                    <input type="submit" value="초" />
                  </form>

                  <EditAnswerDetail
                    answer={question.answer[0].text}
                    onEdit={onEditAnswer}
                    questionId={question.id}
                    answerId={0}
                  />

                  <EditAnswerDetail
                    answer={question.answer[1].text}
                    onEdit={onEditAnswer}
                    questionId={question.id}
                    answerId={1}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default MakeSurbeySwiperPage;
