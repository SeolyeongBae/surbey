import React, { useEffect, useRef, useState } from "react";

/* 질문을 수정한다*/
function EditQuestionDetail({ question, onEdit, id }) {
  const [editing, setEditing] = useState(false);
  const [newQuestion, setNewQuestion] = useState(question.text);
  //띄우고 보여주는 건 state로부터 가져오지 않고 newQuestion에 저장해서 지역적으로 해당 값을 관리한다.
  //그러나 변경의 경우 onEdit를 통해 액션을 발생시켜 state를 수정할 수 있게 한다.

  const searchInputRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    toggleEditing();
    onEdit(id, newQuestion);
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewQuestion(value);
  };

  const toggleEditing = () => setEditing((prev) => !prev);

  //특정 영역을 눌렀을 때는 에딧 모드. 해당 영역이 아닌 다른 곳 아무데나 누르면 에딧 모드가 해제되도록 한다, ref를 사용함.
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target)
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
  }, [searchInputRef]);

  return (
    <span ref={searchInputRef}>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              type="question"
              placeholder="바꿀 질문을 입력해주세요"
              className="mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              value={newQuestion}
              required
              onChange={onChange}
            />
            <input
              className=" border border-gray-300 rounded-md"
              type="submit"
              value="저장"
            />
          </form>
        </>
      ) : (
        <>
          <div className="block p-2.5 w-full text-sm text-gray-900 bg-white ">
            {newQuestion}
          </div>
        </>
      )}
    </span>
  );
}

export default EditQuestionDetail;
