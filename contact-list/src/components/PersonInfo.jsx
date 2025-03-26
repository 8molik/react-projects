import { useState } from "react";
import { GetPhone } from "./GetPhone";
import './PersonInfo.css';

export const PersonInfo = (props) => {
  let stateArray = useState(false);
  let isExpanded = stateArray[0];
  let setIsExpanded = stateArray[1];

  const buttonElement = (
    <button onClick={() => setIsExpanded(!isExpanded)}>
      {isExpanded ? "Ukryj" : "Pokaż"}
    </button>
  );

  return (
    <li className="active">
      <h2>{props.name}</h2>
      { buttonElement }
      {isExpanded && (
        <>
          <h3>
            <GetPhone number={props.number} />
          </h3>
          {props.city && <h3>Miasto: {props.city}</h3>}
        </>
      )}
    </li >
  );
};
