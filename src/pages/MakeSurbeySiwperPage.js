import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";
import EditQuestionDetail from "../components/editQuestionDetail";
import { editQuestion } from "../modules/editQuestion";

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
  const dispatch = useDispatch();

  const editQuestions = useSelector((state) => state.editReducer);
  const onEdit = (id, text) => dispatch(editQuestion(id, text)); //질문 수정

  return (
    <div>
      <Swiper
        className="banner"
        spaceBetween={50}
        slidesPerView={1}
        initialSlide={index}
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
                  <div> A </div>
                  <div> B </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default MakeSurbeySwiperPage;
