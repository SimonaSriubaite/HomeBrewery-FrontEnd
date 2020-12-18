import styled from "styled-components";

export const InputDiv = styled.div`
  width: 100%;
  margin-top: 10px;
`;
export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => props.theme.primary.color};
  padding: 0;
  margin-bottom: 10px;
  width: 100%;
`;

export const InputField = styled.input`
  box-sizing: border-box;
  margin-top: 4px;
  width: 100%;
  padding: 1em 0.5em;
  font-size: 16px;
  color: ${(props) => props.theme.primary.color};
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.secondary.background};
  &&:focus {
    border: 2px solid ${(props) => props.theme.primary.background};
  }
  &&::placeholder {
    color: ${(props) => props.theme.secondary.background};
    opacity: 1;
  }
`;

export const DropdownSelect = styled.select`
  -webkit-appearance: none;
  appearance: none;
  padding: 1em 0.5em;
  background: url("https://www.freeiconspng.com/uploads/black-arrow-down-icon-png-16.png")
    no-repeat right #ffffff;
  border: 2px solid ${(props) => props.theme.secondary.background};
  width: 100%;
  font-size: 16px;
  box-sizing: border-box;
  margin-top: 4px;
  border-radius: 5px;
  background-size: 20px 20px;
  background-origin: content-box;
`;

export const DropdownBox = styled.div``;
