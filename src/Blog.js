// Наш проект Блог (Модуль2 Практика)

import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

const Content = styled.div`
	padding: 120px 0;
	text-decoration: bold;
	font-size: 22px;
`;
const H2 = styled.h2`
	text-align: center;
`;

const Header = () => <div>Шапка страницы</div>;

const Footer = () => <div>Футер страницы</div>;

export const Blog = () => {
	return (
		<>
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
		</>
	);
};
