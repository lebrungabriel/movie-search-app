import React from "react";

const Filter = ({ category, filterHandler, textColor }) => {
  // Filter component receives three props: category, filterHandler, and textColor

  return (
    // Button element with an onClick event handler that triggers filterHandler function
    <button onClick={filterHandler} className={`${textColor}`}>
      {category}
    </button>
  );
};

export default Filter;
