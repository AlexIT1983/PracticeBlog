// Отдельный метод по запросу новой роли пользователя
import { ROLE } from '../../constans';
import { sessions } from '../sessions';
import { setUserRole } from '../api';

export const updateUserRole = async (hash, userId, newUserRoleId) => {
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
	setUserRole(userId, newUserRoleId);

	return {
		error: null,
		res: true,
	};
};
