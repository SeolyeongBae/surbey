import React, { useState } from "react";
import PhotoContainer from "../containers/PhotoContainer";

const MySearchBar = ({ setID }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const shouldDisplayButton = searchValue.length > 0;

  const handleInputClear = () => {
    setSearchValue("");
  };

  const onSubmit = () => {
    setID(searchValue);
  }; //여기서 api를 보내게 할 것임.

  return (
    <>
      <input
        type="text"
        value={searchValue}
        placeholder="search by ID"
        onChange={handleInputChange}
      />

      <input
        type="submit"
        className="authInput authSubmit"
        value={"Search"}
        onClick={onSubmit}
      />

      {shouldDisplayButton && <button onClick={handleInputClear}>clear</button>}
    </>
  );
};

export default MySearchBar;
