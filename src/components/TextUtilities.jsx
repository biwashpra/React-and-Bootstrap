import React, { useState } from "react";

function TextUtilities(props) {
  const [orginalText, updateText] = useState("");
  const eventHandlingUpper = () => {
    let next = orginalText.toUpperCase();
    updateText(next);
  };

  const eventHandlingLower = () => {
    let nextLower = orginalText.toLowerCase();
    updateText(nextLower);
  };

  const handleEvent = (e) => {
    updateText(e.target.value);
  };

  let words = orginalText.split(" ").length;
  let characters = orginalText.length;

  return (
    <div className="container my-3">
      <div>
        <h2 className="text-danger">Write To Format The Text Below</h2>
        <textarea
          name="text"
          id="myBox"
          cols="80"
          rows="20"
          value={orginalText}
          onChange={handleEvent}
          style={{ backgroundColor: props.mode === "light" ? "white" : "grey" }}
          //   className="bg-dark"
        ></textarea>
        <div className="my-2">
          <button onClick={eventHandlingUpper} className="btn btn-primary mx-2">
            Convert To Uppercase
          </button>

          <button onClick={eventHandlingLower} className="btn btn-primary">
            Convert To Lowercase
          </button>
        </div>
      </div>
      <div className="container">
        <h1 className={`text-${props.mode === "dark" ? "white" : "black"}`}>
          Your Text Summary
        </h1>
        <p className={`text-${props.mode === "dark" ? "white" : "black"}`}>
          You have written {words} <strong>words</strong> and {characters}{" "}
          <strong>characters</strong>, Keep Writing To Improve.
        </p>
      </div>
      <div>
        <h2 className={`text-${props.mode === "dark" ? "white" : "black"}`}>
          Live Preview
        </h2>
        <p className={`text-${props.mode === "dark" ? "danger" : "primary"}`}>
          {orginalText === "" ? "Write something above" : orginalText}
        </p>
      </div>
    </div>
  );
}

export default TextUtilities;
