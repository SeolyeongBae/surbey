/* 액션 타입 선언 */
const ADD_QUESTION = "edit/ADD_QUESTION";
const DELETE_QUESTION = "edit/DETELE_QUESTION";
const EDIT_QUESTION = "edit/EDIT_QUESTION";
const EDIT_QUESTION_ANSWER = "edit/EDIT_QUESTION_ANSWER";
//const TOGGLE_TODO = 'todos/TOGGLE_TODO';

/* 액션 생성함수 선언 */
let nextId = 1; // 고유 id

export const addQuestion = (text) => ({
  type: ADD_QUESTION,
  question: {
    id: nextId++,
    text,
  },
});

export const deleteQuestion = (index) => ({
  type: DELETE_QUESTION,
  index: index,
});

export const editQuestion = (id, text) => ({
  type: EDIT_QUESTION,
  question: {
    id: id,
    text: text,
  },
});

/*
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});
*/

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
          ? { ...question, text: action.question.text } // done 값을 반전시키고
          : question
      );
    /*case TOGGLE_TODO:
      return state.map(
        todo =>
          todo.id === action.id // id 가 일치하면
            ? { ...todo, done: !todo.done } // done 값을 반전시키고
            : todo // 아니라면 그대로 둠
      );*/
    default:
      return state;
  }
}
