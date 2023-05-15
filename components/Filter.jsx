import React from "react";

const Filter = ({ category, filterHandler, textColor }) => {
  return (
    <button onClick={filterHandler} className={`${textColor}`}>
      {category}
    </button>
  );
};

export default Filter;
