// Отдельная функция асинхронная для получения пользователя
//
import { transformUser } from '../transformers/transfrom-user';

export const getUsers = () =>
	fetch('http://localhost:3005/users')
		.then((loadedUsers) => loadedUsers.json())
		.then((loadedUsers) => loadedUsers && loadedUsers.map(transformUser));
