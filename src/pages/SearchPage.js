import React, { useState } from "react";
import MySearchBar from "../components/searchBar";
import PhotoContainer from "../containers/PhotoContainer";

function SearchPage() {
  const [postID, setpostID] = useState("1");

  const setID = (number) => {
    setpostID(number);
  };

  return (
    <>
      <MySearchBar setID={setID} />
      <PhotoContainer postId={parseInt(postID, 10)} />
    </>
  );
}

export default SearchPage;
