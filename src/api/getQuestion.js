import axios from "axios";

//json placeholder로부터 응답을 받아옴
export const getQuestionsList = (id) => {
  return axios.get(`https://api.surbey.kro.kr/survey/${id}/questions`);
};

export const getQuestionById = async (id) => {
  const response = await axios.get(`http://localhost:4000/questionJson/${id}`);
  return response.data;
};
