import { useState } from "react";
export const Square = ({ value, onSquareClick }) => {
  // const [value, setValue] = useState(null);

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setValue("X");
  // };
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};
