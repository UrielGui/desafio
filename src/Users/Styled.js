import styled from 'styled-components';

export const Container = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column-reverse;
	place-content: center;
	flex-wrap: wrap;
	padding: 20px;
`;

export const Box = styled.ul`
	display: flex;
	flex-direction: column;
	place-items: center;
	margin-top: 20px;
	padding: 40px;
	border-radius: 20px;
	background: #151c32;

	img {
		max-width: 150px;
		margin-bottom: 20px;
		border-radius: 10px;
	}
`;

export const Options = styled.div`
	display: flex;
	justify-content: space-around;
	margin-top: 20px;
`;

export const Button = styled.button`
  background: ${(props) => props.background};
	color: #fff;
	padding: 20px; 10px;
  border-radius: 5px;
  margin-right: 10px;

  :disabled {
    opacity: 0.4;
    cursor: default;
  }
`;
