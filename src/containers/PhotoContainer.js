import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost } from "../modules/albums";
import Discription from "../components/Discription";

function PhotoContainer({ postId }) {
  const { data, loading, error } = useSelector(
    (state) => state.photoReducer.photo[postId]
  ) || {
    loading: false,
    data: null,
    error: null,
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(postId));
  }, [postId, dispatch]);

  if (loading && !data) return <div>로딩중...</div>; // 로딩중이면서, 데이터가 없을 때에만 로딩중... 표시
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return <Discription post={data} />;
}

export default PhotoContainer;
