import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ResponseContainer from "../containers/ResponseContainer";
import ResponseInfoSurvey from "../components/responseInfoSurvey";

function SearchPage() {
  const { id } = useParams();
  const [isStarted, setIsStarted] = useState(false);

  const onClick = () => {
    setIsStarted(() => true);
  };

  return (
    <>
      {!isStarted ? (
        <ResponseInfoSurvey onClick={onClick} />
      ) : (
        <ResponseContainer surveyId={id} />
      )}
    </>
  );
}

export default SearchPage;
