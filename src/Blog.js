// Наш проект Блог (Модуль2 Практика)

import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Header, Footer } from './components';
import { Authorization, Registration, Users } from './pages';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100%;
	margin: 0 auto;
	background-color: #fff;
`;

const Page = styled.div`
	padding: 120px 0;
	text-decoration: bold;
	font-size: 22px;
`;

export const Blog = () => {
	return (
		<AppColumn>
			<Header />

			<Page>
				<i className="fa fa-camera-retro"></i>
				<Routes>
					<Route path="/" element={<div>Главная страница</div>} />
					<Route path="/login" element={<Authorization />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/users" element={<Users />} />
					<Route path="/post" element={<div>Новая статья</div>} />
					<Route path="/post/:postId" element={<div>Статья</div>} />
					<Route path="*" element={<div>Ошибка</div>} />
				</Routes>
			</Page>
			<Footer />
		</AppColumn>
	);
};
