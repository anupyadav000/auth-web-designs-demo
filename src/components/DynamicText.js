// src/DynamicText.js

import React, { useState, useEffect } from "react";
import "../App.css"; // Import the CSS file for styling

const DynamicText = () => {
  const textArray = ["Word 1", "Word 2", "Word 3", "Word 4"];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isWriting, setIsWriting] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsWriting(true); // Set the state to true to trigger letter-by-letter writing
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        setText(""); // Clear the current text
      }, 2000); // The time (in milliseconds) before starting the next word
    }, 4000); // The time (in milliseconds) for the whole cycle (word + pause)

    return () => clearInterval(interval);
  }, [textArray.length]);

  useEffect(() => {
    if (isWriting) {
      // Start letter-by-letter writing
      const word = textArray[index];
      let currentIndex = 0;

      const interval = setInterval(() => {
        setText((prevText) => prevText + word[currentIndex]);
        currentIndex++;

        if (currentIndex === word.length) {
          setIsWriting(false); // Finish letter-by-letter writing
          clearInterval(interval); // Clear the interval when the word is fully written
        }
      }, 100); // The time (in milliseconds) between each letter

      return () => clearInterval(interval);
    }
  }, [index, textArray, isWriting]);

  return <div>{text}</div>;
};

export default DynamicText;

// const DynamicText = () => {
//   const textArray = ["Element 1", "Element 2", "Element 3", "Element 4"];
//   const [index, setIndex] = useState(0);
//   const [text, setText] = useState(textArray[index]);
//   const [isTextChanging, setIsTextChanging] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsTextChanging(true); // Set the state to true to trigger the CSS transition
//       setTimeout(() => {
//         setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
//         setIsTextChanging(false); // Reset the state after the transition ends
//       }, 500); // The time (in milliseconds) for the transition animation
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [textArray.length]);

//   useEffect(() => {
//     setText(textArray[index]);
//   }, [index, textArray]);

//   return (
//     <div className={`text-container ${isTextChanging ? "changing" : ""}`}>
//       <div className="text-content">{text}</div>
//     </div>
//   );
// };

// export default DynamicText;
