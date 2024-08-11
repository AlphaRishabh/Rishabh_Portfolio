import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Software Developer", "MERN Stack Developer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        cursor: "",
        wrapperClassName: "typewriter-text",
      }}
    />
  );
}

export default Type;
