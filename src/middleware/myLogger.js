const myLogger = (store) => (next) => (action) => {
  console.log(action); //액션 출력
  const result = next(action); // 다음 미들웨어(리듀서)에게 액션 전달

  console.log("\t", store.getState()); //업뎃 이후의 상태조회

  return result;
};

export default myLogger;
