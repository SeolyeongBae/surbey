/* 액션 타입 선언 */
const ADD_QUESTION = "edit/ADD_QUESTION";
const DELETE_QUESTION = "edit/DETELE_QUESTION";
const EDIT_QUESTION = "edit/EDIT_QUESTION";
const EDIT_ANSWER = "edit/EDIT_ANSWER";
const EDIT_TIME = "edit/EDIT_TIME";

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
    time: 0,
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

//타이머 수정 엑션
//Boolean 으로 해도 되지만 나중에 시간을 커스텀할 때 time을 넣게 하기 위해서 number로 둠.
export const editTime = (id, time) => ({
  type: EDIT_TIME,
  question: {
    id: id,
    time: time,
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
    case EDIT_TIME:
      return state.map((question) =>
        question.id === action.question.id // id 가 일치하면
          ? { ...question, time: action.question.time } // time 값을 바꿔준다. 불변성 유지를 위해 스프레드 연산자 사용
          : question
      );
    case EDIT_ANSWER:
      return state.map((question) => {
        const ansEditId = 1 - action.answer.answerId;

        const current = [...question.answer].filter(
          (answer) => answer.ansId === ansEditId
        ); //question.answer의 순서가 뒤바뀌는 경우를 감안하여 처리.

        //수정하지 않을 대상 답변 아이디
        // ans ID가 0이면 toggle된다.

        return question.id === action.answer.questionId // id 가 일치하면
          ? {
              ...question,
              answer: current.concat({
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
