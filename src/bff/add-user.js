// Функция добавление пользователя
import { generateDate } from './generate.-date';

// сделаем метод POST на сервер, нового пользователя
export const addUser = (addLogin, addPassword) =>
	fetch('http://localhost:3005/users', {
		method: 'POST',
		headers: {
			'Content-types': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			login: addLogin,
			password: addPassword,
			register_at: generateDate(),
			role_id: 2,
		}),
	});
