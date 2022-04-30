/* 액션 타입 선언 */
const ADD_QUESTION = "edit/ADD_QUESTION";
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
