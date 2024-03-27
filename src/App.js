// Наш проект Блог (Модуль2 Практика)

import styled from 'styled-components';

const Div = styled.div`
	text-align: center;
	text-decoration: bold;
	font-size: 22px;
`;

export const App = () => {
	return (
		<Div>
			<i className="fa fa-camera-retro"></i>
			<div>123</div>
			<i className="fa fa-camera-retro"></i>
		</Div>
	);
};
