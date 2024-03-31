// Наш проект Блог (Модуль2 Практика)

import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './components';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100%;
	margin: 0 auto;
	background-color: #fff;
`;

const Content = styled.div`
	padding: 120px 0;
	text-decoration: bold;
	font-size: 22px;
`;
const H2 = styled.h2`
	text-align: center;
`;

const Footer = () => <div>Футер страницы</div>;

export const Blog = () => {
	return (
		<AppColumn>
			<Header />

			<Content>
				<i className="fa fa-camera-retro"></i>
				<H2>Контент страницы</H2>
				<Routes>
					<Route path="/" element={<div>Главная страница</div>} />
					<Route path="/login" element={<div>Авторизации</div>} />
					<Route path="/register" element={<div>Регистрации</div>} />
					<Route path="/users" element={<div>Пользователи</div>} />
					<Route path="/post" element={<div>Новая статья</div>} />
					<Route path="/post/:postId" element={<div>Статья</div>} />
					<Route path="*" element={<div>Ошибка</div>} />
				</Routes>
			</Content>
			<Footer />
		</AppColumn>
	);
};
