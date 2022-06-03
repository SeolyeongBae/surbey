import axios from "axios";

//json placeholder로부터 응답을 받아옴
export const getQuestionsList = () => {
  return axios.get(
    "https://api.surbey.kro.kr/survey/f6b3243e-e348-4673-a0ee-1fc38dcbbca8/questions"
  );
};

export const getQuestionById = async (id) => {
  const response = await axios.get(`http://localhost:4000/questionJson/${id}`);
  return response.data;
};
