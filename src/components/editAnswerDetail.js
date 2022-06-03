import React, { useEffect, useRef, useState } from "react";

function EditAnswerDetail({ answer, onEdit, questionId, answerId }) {
  const [editing, setEditing] = useState(false);
  const [newAnswer, setNewAnswer] = useState(answer);
  //띄우고 보여주는 건 state로부터 가져오지 않고 newQuestion에 저장해서 지역적으로 해당 값을 관리한다.
  //그러나 변경의 경우 onEdit를 통해 액션을 발생시켜 state를 수정할 수 있게 한다.

  const answerInputRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    toggleEditing();
    onEdit(questionId, answerId, newAnswer);
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewAnswer(value);
  };

  const toggleEditing = () => setEditing((prev) => !prev);

  //특정 영역을 눌렀을 때는 에딧 모드. 해당 영역이 아닌 다른 곳 아무데나 누르면 에딧 모드가 해제되도록 한다, ref를 사용함.
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        answerInputRef.current &&
        !answerInputRef.current.contains(event.target)
      ) {
        setEditing(() => false);
      } else {
        setEditing(() => true);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [answerInputRef]);

  return (
    <div ref={answerInputRef} className="mx-1">
      {editing ? (
        <>
          <form onSubmit={onSubmit} className="my-4 ">
            <input
              className="py-1 px-2 w-full"
              type="answer"
              placeholder="바꿀 정답을 입력해주세요"
              value={newAnswer}
              required
              onChange={onChange}
            />
            <input
              className="items-center inline-flex justify-center px-2 py-1 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              type="submit"
              value="저장"
            />
          </form>
        </>
      ) : (
        <>
          <div className="py-1  px-2  bg-gray-50 my-4 rounded-md flex px-2">
            {" "}
            {newAnswer}{" "}
          </div>
        </>
      )}
    </div>
  );
}

export default EditAnswerDetail;
