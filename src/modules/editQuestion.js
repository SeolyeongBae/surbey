/* 액션 타입 선언 */
const ADD_QUESTION = "edit/ADD_QUESTION";
const DELETE_QUESTION = "edit/DETELE_QUESTION";
const EDIT_QUESTION = "edit/EDIT_QUESTION";
const EDIT_ANSWER = "edit/EDIT_ANSWER";

let nextId = 1; // 고유 id

//질문 추가 액션
export const addQuestion = (text) => ({
  type: ADD_QUESTION,
  question: {
    id: nextId++,
    text,
    answer: [
      { ansId: 0, text: "A" },
      { ansId: 1, text: "B" },
    ],
  },
});

//질문 삭제 액션
export const deleteQuestion = (index) => ({
  type: DELETE_QUESTION,
  index: index,
});

//질문 수정 액션
export const editQuestion = (id, text) => ({
  type: EDIT_QUESTION,
  question: {
    id: id,
    text: text,
  },
});

//답변 수정 액션
export const editAnswer = (questionId, answerId, text) => ({
  type: EDIT_ANSWER,
  answer: {
    questionId: questionId,
    answerId: answerId,
    text: text,
  },
});

/* 초기 상태 선언 */
const initialState = [];

export default function editReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_QUESTION:
      return state.concat(action.question);
    case DELETE_QUESTION:
      return state.filter((question) => question.id !== action.index);
    case EDIT_QUESTION:
      return state.map((question) =>
        question.id === action.question.id // id 가 일치하면
          ? { ...question, text: action.question.text } // text 값을 바꿔준다. 불변성 유지를 위해 스프레드 연산자 사용
          : question
      );
    case EDIT_ANSWER:
      return state.map((question) => {
        const ansEditId = 1 - action.answer.answerId;
        //수정하지 않을 대상 답변 아이디
        // ans ID가 0이면 안 건드릴 친구는 1이 된다.
        console.log(ansEditId);
        console.log(action.answer.answerId);
        console.log(question.answer);

        return question.id === action.answer.questionId // id 가 일치하면
          ? {
              ...question,
              answer: [[...question.answer][ansEditId]].concat({
                //불변성을 지키기 위해 스프레드+concat
                ansId: action.answer.answerId,
                text: action.answer.text,
              }),
            }
          : question;
      });
    default:
      return state;
  }
}
