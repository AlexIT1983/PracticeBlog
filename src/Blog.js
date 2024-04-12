// Наш проект Блог (Модуль2 Практика)

import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Header, Footer } from './components';
import { Authorization, Registration, Users, Post } from './pages';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './actions';

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
	padding: 120px 0 20px;
	text-decoration: bold;
	font-size: 22px;
`;

export const Blog = () => {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');

		// если пользователя нету, ничего не делать
		if (!currentUserDataJSON) {
			return;
		}

		// преобразуем данные из формата JSON
		const currentUserData = JSON.parse(currentUserDataJSON);

		dispatch(
			setUser({
				...currentUserData,
				roleId: Number(currentUserData.roleId),
			}),
		);
	}, [dispatch]);

	return (
		<AppColumn>
			<Header />

			<Page>
				<Routes>
					<Route path="/" element={<div>Главная страница</div>} />
					<Route path="/login" element={<Authorization />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/users" element={<Users />} />
					<Route path="/post" element={<div>Новая статья</div>} />
					<Route path="/post/:id" element={<Post />} />
					<Route path="*" element={<div>Ошибка</div>} />
				</Routes>
			</Page>
			<Footer />
		</AppColumn>
	);
};
