// Функция получения конкретного пользователя тоже асинхронная

// импортируем функцию для получения массива пользователей
import { getUsers } from './get-users';

export const getUser = async (loginToFind) => {
	const users = await getUsers();
	return users.find(({ login }) => login === loginToFind);
};
