import styled from "styled-components";

export const PageTitle = styled.h2`
  font-size: 2em;
  color: ${(props) => props.theme.primary.color};
  text-align: center;
`;

export const TableTitle = styled.h3`
  font-size: 1.3em;
  color: ${(props) => props.theme.primary.color};
  text-align: left;
  padding: 0;
  margin: 0;
  margin-bottom: 2em;
`;
export const TableBox = styled.div`
  width: 100%;
  padding: 2em;
  background-color: #edf1f5;
  border-radius: 3px;
  margin: 3em 0 6em 0;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  text-align: left;
  table-layout: fixed;

  && td,
  th {
    border: 1px solid #999;
    padding: 0.5rem;
    text-align: center;
    word-wrap: break-word;
    font-size: 1.2rem;
  }
  && th {
    background: #e5e5e5;
  }
  && tr:nth-child(3n - 1) {
    background: #e8a9c4;
  }
  && tr:nth-child(3n - 2) {
    background: #ffffbc;
  }
  && tr:nth-child(3n - 3) {
    background: #ffaa98;
  }
`;
