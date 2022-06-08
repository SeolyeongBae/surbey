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
      <div className="my-5">
        <label htmlFor="name" className="block text-sm font-bold text-gray-700">
          설문 {subject}을 입력하세요
        </label>
        <div className="mt-1 border-b border-gray-300 focus-within:border-indigo-600">
          <form>
            <input
              className="block w-full border-0 border-b border-transparent bg-gray-50 focus:border-indigo-600 focus:ring-0 sm:text-sm"
              type="answer"
              value={value}
              required
              onChange={onChange}
              placeholder={"설문 " + subject}
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default EditSurbeyInfo;
