// Отдельаня функция для регистрации

import { addUser, getUser } from '../api';

import { sessions } from '../sessions';

// register - ручка для реализации регистрации async (функция асинхронная)
export const register = async (regLogin, regPassword) => {
	// получаем пользователя через функцию getUser
	const existedUser = await getUser(regLogin);

	// проверяем пользователя, если найден - это проблема, мы остановимся
	if (existedUser) {
		return {
			error: 'Такой логин уже занят',
			res: null,
		};
	}
	// сделаем метод POST на сервер, нового пользователя через функцию addUser
	const user = await addUser(regLogin, regPassword);

	// если пользователя не найдено, мы регистрируем его и даем ему сессию

	return {
		error: null,
		res: {
			id: user.id,
			login: user.login,
			roleId: user.role_id,
			session: sessions.create(user),
		},
	};
};
