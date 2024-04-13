// Операция сохранения редактируемого поста

import { ROLE } from '../../constans';
import { sessions } from '../sessions';
import { updatePost } from '../api';

export const savePost = async (hash, newPostData) => {
	// получаем список ролей для пользователей
	const accessRoles = [ROLE.ADMIN];

	// проверяем пользователя, если найден - это проблема, мы остановимся
	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	//если доступ есть, то совершаем операцию обновления поста
	const updatedPost = await updatePost(newPostData);

	return {
		error: null,
		res: updatedPost,
	};
};
