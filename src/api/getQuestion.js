import axios from "axios";
//json placeholder로부터 응답을 받아옴
export const getQuestionsList = (id) => {
  return axios.get(`https://api.surbey.kro.kr/survey/${id}/questions`);
};

export const getQuestionById = async (id) => {
  const response = await axios.get(`http://localhost:4000/questionJson/${id}`);
  return response.data;
};

export const verifyQuestions = async (id, QuestionArray) => {
  console.log(QuestionArray, "QuestionArray");

  await axios
    .put(`https://api.surbey.kro.kr/survey/${id}/questions/analysis`, {
      questionRequestList: QuestionArray,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      // 오류발생시 실행
      console.log("되는게 없냐!");
      console.log(error);
    })
    .then(function () {
      // 항상 실행
    });
};

export const postResponse = async (id, ansArray) => {
  await axios
    .post(`https://api.surbey.kro.kr/survey/${id}/questions`, {
      answers: ansArray,
    })
    .then(function (response) {
      console.log("POST 성공!", response);
    })
    .catch(function (error) {
      console.log("되는게 뭐냐!");
    });
};

export const makeSurvey = async (surveyInfo) => {
  let key = 0;

  await axios
    .post(`https://api.surbey.kro.kr/surveys`, {
      request: surveyInfo,
    })
    .then(function (response) {
      key = response.headers.location;
    })
    .catch(function (error) {
      console.log("되는게 뭐냐!");
    })
    .then(function () {
      window.location.href = `${key}`;
    });

  return key;
};
