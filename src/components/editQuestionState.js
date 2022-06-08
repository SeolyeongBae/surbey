import React from "react";

function EditQuestionState({ number }) {
  const text = ["긍정", "부정", "중립"];
  const color = ["bg-sky-400", "bg-red-400", "bg-lime-300"];
  return (
    <>
      <div className={`${color[number % 3]} px-2 py-1 rounded-md`}>
        {text[number % 3]}
      </div>
    </>
  );
}

export default EditQuestionState;
