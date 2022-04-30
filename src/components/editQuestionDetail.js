import React, { useState } from "react";

function EditQuestionDetail({ question, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [newQuestion, setNewQuestion] = useState(question.text);

  const searchInputRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    changeEditMode(elementIndex);
    onEdit(newQuestion);
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewQuestion(value);
  };

  const toggleEditing = () => setEditing((prev) => !prev);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        toggleEditing();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div ref={searchInputRef}>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              type="question"
              placeholder="바꿀 질문을 입력해주세요"
              value={newQuestion}
              required
              onChange={onChange}
            />
            <input type="submit" value="Update Question" />
          </form>
        </>
      ) : (
        <>
          <div> {newQuestion} </div>
        </>
      )}
    </div>
  );
}

export default EditQuestionPriview;
