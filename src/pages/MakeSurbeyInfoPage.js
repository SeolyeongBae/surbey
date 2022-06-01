import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function MakeSurbeyInfopPage() {
  const [startDate, setStartDate] = useState(new Date());

  const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button className="dateInput" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  return (
    <>
      <div>설문 기초 정보 입력</div>

      <div> 설문 제목을 입력하세요</div>
      <form>
        <input type="answer" placeholder="설문 제목" />
      </form>

      <div> 설문 대상을 입력하세요</div>
      <form>
        <input type="answer" placeholder="설문 대상" />
      </form>

      <div> 설문 목적을 입력하세요</div>
      <form>
        <input type="answer" placeholder="설문 목적" />
      </form>

      <div> 설문 기간을 입력하세요</div>
      <DatePicker
        selected={startDate}
        selectsStart
        value={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="yyyy년 M월 d일"
        customInput={<ExampleCustomInput />}
      />

      <DatePicker
        selected={startDate}
        selectsStart
        value={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="yyyy년 M월 d일"
        customInput={<ExampleCustomInput />}
      />

      <div>
        <Link to="/edit"> 질문 만들기 </Link>
      </div>
    </>
  );
}

export default MakeSurbeyInfopPage;
