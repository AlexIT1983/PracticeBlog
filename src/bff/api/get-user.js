// Функция получения конкретного пользователя тоже асинхронная

import { transformUser } from '../transformers/transfrom-user';

export const getUser = async (loginToFind) =>
	fetch(`http://localhost:3005/users?login=${loginToFind}`)
		.then((loadedUser) => loadedUser.json())
		.then(([loadedUser]) => loadedUser && transformUser(loadedUser));
