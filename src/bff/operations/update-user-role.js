// Отдельный метод по запросу новой роли пользователя
import { ROLE } from '../../constans';
import { sessions } from '../sessions';
import { setUserRole } from '../api';

export const updateUserRole = async (userSession, userId, newUserRoleId) => {
	// получаем списко ролей для пользователей
	const accessRoles = [ROLE.ADMIN];

	// проверяем пользователя, если найден - это проблема, мы остановимся
	if (!sessions.access(userSession, accessRoles)) {
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
