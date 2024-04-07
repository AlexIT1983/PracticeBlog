// Компонет обертка для отображение ошибки

import styled from 'styled-components';
import { H2 } from '../h2/h2';

const Div = styled.div`
	dispay: flex;
	flex-column: column;
	align-items: center;
`;

// Компонет контент
export const Content = ({ children, error }) =>
	error ? (
		<Div>
			<H2>Ошибка</H2> <div>{error}</div>
		</Div>
	) : (
		children
	);
