import React, { useState } from "react";

function EditSurbeyInfo({ subject, value, setResult }) {
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setResult(value);
    console.log(subject, value);
  };

  return (
    <>
      <div> 설문 {subject}을 입력하세요</div>
      <form>
        <input
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
          type="answer"
          value={value}
          required
          onChange={onChange}
          placeholder={"설문 " + subject}
        />
      </form>
    </>
  );
}

export default EditSurbeyInfo;
