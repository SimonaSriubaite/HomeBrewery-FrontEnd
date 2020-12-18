import styled from "styled-components";

export const FormTitle = styled.h2`
  font-size: 2em;
  color: ${(props) => props.theme.primary.color};
  text-align: center;
`;

export const ButtonBox = styled.div`
  text-align: right;
`;

export const FormDiv = styled.div`
  width: 100%;
`;

export const FlexBox = styled.div`
  display: flex;
  box-sizing: border-box;
  && :first-child {
    padding-right: 30px;
  }
`;
