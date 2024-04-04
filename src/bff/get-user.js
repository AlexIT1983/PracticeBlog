// Функция получения конкретного пользователя тоже асинхронная

// импортируем функцию для получения массива пользователей
// import { getUsers } from './get-users';

export const getUser = async (loginToFind) =>
	fetch(`http://localhost:3005/users?login=${loginToFind}`)
		.then((loadedUser) => loadedUser.json())
		.then(([loadedUser]) => loadedUser);
