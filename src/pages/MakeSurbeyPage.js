import React, { useMemo, useState } from "react";
import EditQuestionPriview from "../components/editQuestionPreview";

function countNumbers(array) {
  return array.length;
}

function MakeSurbeyPage() {
  const [questions, setQuestions] = useState([{ id: "1", title: "A vs B" }]);
  const [isEditMode, setIsEditMode] = useState([false]);

  const addQuestion = () => {
    setQuestions(
      questions.concat({
        id: `${count + 1} `,
        title: "질문을 입력해주세요",
      })
    );
  };

  const changeEditMode = (idx) => {
    const isToggle = isEditMode[idx];

    const newArr = Array(questions.length).fill(false);

    if (isToggle == false) {
      newArr[idx] = true;
    }
    setIsEditMode(newArr);
  };

  const count = useMemo(() => countNumbers(questions), [questions]);

  return (
    <>
      {questions.map((question, index) => (
        <li key={question.id}>
          <EditQuestionPriview
            question={question}
            changeEditMode={changeEditMode}
            isEditMode={isEditMode[index]}
            elementIndex={index}
          />
          <div> 인덱스 : {index} </div>
        </li>
      ))}
      <button onClick={addQuestion}>append questions</button>
    </>
  );
}

export default MakeSurbeyPage;
