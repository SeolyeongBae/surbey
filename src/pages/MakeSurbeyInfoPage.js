import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import EditSurbeyInfo from "../components/editSurbeyInfo";
import { makeSurvey } from "../api/getQuestion";

function MakeSurbeyInfopPage() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [title, setTitle] = useState("");
  const [responser, setResponser] = useState("");
  const [object, setObject] = useState("");

  const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button
      className="dateInput py-1 px-4 mx-0 rounded-lg text-sky-600 bg-blue-100 hover:bg-blue-300"
      onClick={onClick}
      ref={ref}
    >
      {value}
    </button>
  ));

  const onCreateSurvey = () => {
    const surveyInfo = {
      endDate: endDate,
      password: 1234,
      purpose: object,
      startDate: startDate,
      title: title,
    };

    const key = makeSurvey(surveyInfo);
    console.log(key);
  };

  return (
    <div className="flex flex flex-col px-10 py-10">
      <h3 className="py-1 rounded-lg text-2xl font-bold">
        설문 기초 정보 입력
      </h3>

      <EditSurbeyInfo subject={"제목"} value={title} setResult={setTitle} />
      <EditSurbeyInfo
        subject={"대상"}
        value={responser}
        setResult={setResponser}
      />
      <EditSurbeyInfo subject={"목적"} value={object} setResult={setObject} />

      <div> 설문 기간을 입력하세요</div>

      <div className="flex flex-row justify-between my-2">
        <div>
          <DatePicker
            selected={startDate}
            selectsStart
            value={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy/M/d"
            customInput={<ExampleCustomInput />}
          />
        </div>
        ~
        <div>
          <DatePicker
            selected={endDate}
            selectsStart
            value={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="yyyy/M/d"
            customInput={<ExampleCustomInput />}
          />
        </div>
      </div>

      <button
        onClick={onCreateSurvey}
        className="mt-5 py-2 px-4 font-semibold rounded-lg text-white bg-blue-500 hover:bg-blue-700"
      >
        질문 만들기
      </button>
    </div>
  );
}

export default MakeSurbeyInfopPage;
