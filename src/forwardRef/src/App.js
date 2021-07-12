import React, { useEffect, useRef } from "react";
import Input from "./components/Input";

// credit: https://www.youtube.com/watch?v=ScT4ElKd6eo

export default function() {
  useEffect(() => {
    firstNameRef.current.focus();
  }, []); // <- empty brackets mean just do this on initial render

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const submitBtnRef = useRef();

  const sendKeyDown = (e, type) => {
    const key = e.key;
    switch (type) {
      case "firstName":
        if (key === "Enter") lastNameRef.current.focus();
        break;
      case "lastName":
        if (key === "Enter") submitBtnRef.current.focus();
        break;
      case "submitButton":
        e.preventDefault();
        if (key === "Enter") alert("Do you really want to submit?"); // <- does nothing for now
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div>
        <Input
          type="text"
          onKeyDown={e => sendKeyDown(e, "firstName")}
          placeholder="first name"
          ref={firstNameRef}
        />
      </div>
      <div>
        <Input
          type="text"
          onKeyDown={e => sendKeyDown(e, "lastName")}
          placeholder="last name"
          ref={lastNameRef}
        />
      </div>
      <div>
        <button
          onKeyDown={e => sendKeyDown(e, "submitButton")}
          ref={submitBtnRef}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
