import axios from "axios";

//json placeholder로부터 응답을 받아옴
export const getPhotos = () => {
  // console.log("called API!")
  // const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
  return axios.get("https://jsonplaceholder.typicode.com/photos");
};

export const getPhotoById = async (id) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/photos/${id}`
  );
  return response.data;
};
