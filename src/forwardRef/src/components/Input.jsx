import React from "react";

// credit: https://www.youtube.com/watch?v=ScT4ElKd6eo

function Input(props, ref) {
  return <input ref={ref} {...props} />;
}

export default React.forwardRef(Input);
