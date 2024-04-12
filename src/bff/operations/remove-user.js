// Отдельная функция для удаления пользователя из БД

import { ROLE } from '../../constans';
import { sessions } from '../sessions';
import { deleteUser } from '../api';

export const removeUser = async (hash, userId) => {
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

	//если доступ есть, то совершаем операцию
	deleteUser(userId);

	return {
		error: null,
		res: true,
	};
};
