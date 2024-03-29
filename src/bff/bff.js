// Наш эмулированный BFF (Backend for Frontend)

import { createSession } from './create-session';
import { getUser } from './get-user';
import { addUser } from './add-user';

// сделаем его в виде объекта
export const server = {
	// метод авторайз для ввода пользователем логина и пароля
	// мы должны проверить есть ли такая пара - логин и пароль, используем async await
	async authorize(authLogin, authPassword) {
		// ищем в массиве конкретного пользователя, через функцию getUser
		const user = await getUser(authLogin);

		// проверяем пользователя, если найден - идем дальше, если нет остановка
		if (!user) {
			return {
				error: 'Такой пользователь не найден',
				res: null,
			};
		}

		// пользователь найден, проверяем пароль
		// если же это условие не выполнится, идем дальше и найден пароль и пользователь
		if (authPassword !== user.password) {
			return {
				error: 'Введен не корректный пароль',
				res: null,
			};
		}

		// если все проверки пройдены, возвращаем объект c сессией
		return {
			error: null,
			res: createSession(user.role_id),
		};
	},

	// register - ручка для реализации регистрации async (функция асинхронная)
	async register(regLogin, regPassword) {
		// получаем пользователя через функцию getUser
		const user = await getUser(regLogin);

		// проверяем пользователя, если найден - это проблема, мы остановимся
		if (user) {
			return {
				error: 'Такой логин уже занят',
				res: null,
			};
		}
		// сделаем метод POST на сервер, нового пользователя через функцию addUser
		await addUser(regLogin, regPassword);

		// если пользователя не найдено, мы регистрируем его и даем ему сессию
		// через нашу функцию createSession(user.role_id)

		return {
			error: null,
			res: createSession(user.role_id),
		};
	},
};
