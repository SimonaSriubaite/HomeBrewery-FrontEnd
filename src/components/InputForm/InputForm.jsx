import React from "react";
import * as S from "./InputForm.style";

function InputField({
  label,
  name,
  handleChange,
  type,
  inputId,
  required,
  minLength,
  maxLength,
  placeholder,
  options,
}) {
  switch (type) {
    case "email":
      return (
        <S.InputDiv>
          <S.Label htmlFor={inputId}>{label}</S.Label>
          <S.InputField
            onChange={handleChange}
            id={inputId}
            name={name}
            type="email"
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            placeholder={placeholder}
          />
        </S.InputDiv>
      );
    case "password":
      return (
        <S.InputDiv>
          <S.Label htmlFor={inputId}>{label}</S.Label>
          <S.InputField
            onChange={handleChange}
            id={inputId}
            name={name}
            type="password"
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            placeholder={placeholder}
          />
        </S.InputDiv>
      );
    case "dropdown":
      return (
        <S.InputDiv>
          <S.Label htmlFor={inputId}>{label}</S.Label>
          <S.DropdownBox>
            <S.DropdownSelect
              onChange={handleChange}
              id={inputId}
              name={name}
              required={required}
            >
              <option value="" disabled defaultValue hidden>
                Select option
              </option>
              {options &&
                options.map((option) => (
                  <option key={option.id} value={option.value}>
                    {option.text}
                  </option>
                ))}
            </S.DropdownSelect>
          </S.DropdownBox>
        </S.InputDiv>
      );
    default:
      return (
        <S.InputDiv>
          <S.Label htmlFor={inputId}>{label}</S.Label>
          <S.InputField
            onChange={handleChange}
            id={inputId}
            name={name}
            type="text"
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            placeholder={placeholder}
          />
        </S.InputDiv>
      );
  }
}

export default InputField;
