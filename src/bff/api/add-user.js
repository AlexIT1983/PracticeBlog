// Функция добавление пользователя
import { generateDate } from '../utils/generate.-date';

// сделаем метод POST на сервер, нового пользователя
export const addUser = (login, password) =>
	fetch('http://localhost:3005/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			login,
			password,
			registed_at: generateDate(),
			role_id: 2,
		}),
	}).then((createdUser) => createdUser.json());
