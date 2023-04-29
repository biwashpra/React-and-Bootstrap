import React, { useState } from "react";
import Navbar from "./Navbar";
import TextUtilities from "./TextUtilities";
// Or use this below code.
// import { useState } from "react";

function APP() {
  const [mode, setmode] = useState("light");
  const toggleDark = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#00004d";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <div>
      <Navbar title="React-Practise" mode={mode} toggleDark={toggleDark} />
      <TextUtilities mode={mode} />
    </div>
  );
}

export default APP;
