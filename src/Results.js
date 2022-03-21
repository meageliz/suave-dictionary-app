import React from "react";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h1>{props.results.word}</h1>
      </div>
    );
  } else {
    return null;
  }
}