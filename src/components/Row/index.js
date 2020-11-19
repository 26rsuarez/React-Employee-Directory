import React from "react";
import "./style.css";

function Row(props) {
  return (
    <tr>
      <td>{props.first}</td>
      <td>{props.last}</td>
      <td>{props.email}</td>
      <td>{props.state}</td>
    </tr>
  );
};

export default Row;