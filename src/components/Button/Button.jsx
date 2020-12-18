import React from "react";
import * as S from "./Button.style";

function Button({ children, handleClick, color, value }) {
  return (
    <S.Button onClick={handleClick} value={value} color={color}>
      {children}
    </S.Button>
  );
}

export default Button;
