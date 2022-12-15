import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: row-reverse;
  place-content: center;
  flex-wrap: wrap;
`;

export const Box = styled.ul`
  display: flex;
  flex-direction: column;
  place-items: center;
  margin-top: 20px;
  padding: 40px;
  border-radius: 20px;
  background: #151c32;
  margin: 10px;

  img {
    max-width: 150px;
    margin-bottom: 20px;
    border-radius: 10px;
  }
`;

export const Options = styled.div`
  margin: 10px;
  text-align: -webkit-center;
`;

export const Button = styled.button`
  background: ${(props) => props.background};
	color: #fff;
	padding: 10px; 0px;
  border-radius: 5px;
  margin-right: 10px;
`;

export const Form = styled.form`
  margin-bottom: 40px;
`;

export const Input = styled.input`
  border: 0;
  padding: 5px;
  border-radius: 2px;
`;

export const FormButton = styled.button`
  border: 0;
  padding: 5px;
  background: ${(props) => props.background};
  color: #fff;
`;
