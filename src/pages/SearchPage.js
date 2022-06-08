import React from "react";
import { useParams } from "react-router-dom";
import ResponseContainer from "../containers/ResponseContainer";

function SearchPage() {
  const { id } = useParams();

  console.log("id", id);
  return (
    <>
      <ResponseContainer surveyId={id} />
    </>
  );
}

export default SearchPage;
