import React from "react";

function Button({ children, handleClick, value }) {
  return (
    <Button onClick={handleClick} value={value}>
      {children}
    </Button>
  );
}

export default Button;
