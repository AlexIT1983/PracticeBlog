// отдельная функция по запросу ролей

import { getRoles } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../constans/role';

// fetchRoles - ручка для реализации запроса ролей async (функция асинхронная)
export const fetchRoles = async (userSession) => {
	// получаем списко ролей для пользователей
	const accessRoles = [ROLE.ADMIN];

	// проверяем пользователя, если найден - это проблема, мы остановимся
	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}
	// сделаем запрос ролей
	const roles = await getRoles();

	// если все в порядке возвращем роли
	return {
		error: null,
		res: roles,
	};
};
