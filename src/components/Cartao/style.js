import styled from "styled-components";

const Titulos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Container = styled.div`
  margin: 0 auto;
  margin-top: 10px;
  padding: 10px;
  flex-direction: row;
  column-gap: 1em;
  text-align: center;
  border: 1px solid black;
  border-radius: 5px;
  width: 40em;
  font-size: 18px;
  background-color: rgba(0, 0, 0, 0.1);
`;

const Simbolo = styled.span`
  font-weight: bolder;
  text-align: center;
  color: #f18535;
  margin-right: 10px;
`;

const Descricao = styled.span`
  overflow: hidden;
  white-space: nowrap;
  height: 1.5em;
`;

const Momento = styled.span`
  font-family: monospace;
  font-weight: bold;
  margin-left: 10px;
  color: #3e74b4;
`;

export { Container, Simbolo, Descricao, Momento, Titulos };
