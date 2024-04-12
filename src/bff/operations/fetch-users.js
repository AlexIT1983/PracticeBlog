// отдельная функция по запросу пользователей

import { getUsers } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../constans/role';

// fetchRoles - ручка для реализации запроса пользователей async (функция асинхронная)
export const fetchUsers = async (hash) => {
	// получаем списко ролей для пользователей
	const accessRoles = [ROLE.ADMIN];

	// проверяем пользователя, если найден - это проблема, мы остановимся
	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}
	// сделаем запрос ролей
	const users = await getUsers();

	// если все в порядке возвращем роли
	return {
		error: null,
		res: users,
	};
};
