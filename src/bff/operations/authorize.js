// Метод авторизации на сервере.
import { getUser } from '../api';
import { sessions } from '../sessions';

// метод авторайз для ввода пользователем логина и пароля
// мы должны проверить есть ли такая пара - логин и пароль, используем async await
export const authorize = async (authLogin, authPassword) => {
	// ищем в массиве конкретного пользователя, через функцию getUser
	const user = await getUser(authLogin);

	// проверяем пользователя, если найден - идем дальше, если нет остановка
	if (!user) {
		return {
			error: 'Такой пользователь не найден',
			res: null,
		};
	}

	// деструкторизируем пользователя (достаем нужные поля)
	const { id, login, roleId, password } = user;

	// пользователь найден, проверяем пароль
	// если же это условие не выполнится, идем дальше и найден пароль и пользователь
	if (authPassword !== password) {
		return {
			error: 'Введен не корректный пароль',
			res: null,
		};
	}
	// если все проверки пройдены, возвращаем объект c сессией
	return {
		error: null,
		res: {
			id,
			login,
			roleId,
			session: sessions.create(user),
		},
	};
};
