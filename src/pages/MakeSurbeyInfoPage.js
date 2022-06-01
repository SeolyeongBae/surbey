import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import EditSurbeyInfo from "../components/editSurbeyInfo";

function MakeSurbeyInfopPage() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [title, setTitle] = useState("");
  const [responser, setResponser] = useState("");
  const [object, setObject] = useState("");

  const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button className="dateInput" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  return (
    <>
      <h3>설문 기초 정보 입력</h3>

      <EditSurbeyInfo subject={"제목"} value={title} setResult={setTitle} />
      <EditSurbeyInfo
        subject={"대상"}
        value={responser}
        setResult={setResponser}
      />
      <EditSurbeyInfo subject={"목적"} value={object} setResult={setObject} />

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
        selected={endDate}
        selectsStart
        value={endDate}
        onChange={(date) => setEndDate(date)}
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
