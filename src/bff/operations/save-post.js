// Операция сохранения редактируемого поста

import { ROLE } from '../../constans';
import { sessions } from '../sessions';
import { addPost, updatePost } from '../api';

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
	// делаем ветвление для условного ветвления
	const savedPost =
		newPostData.id === ''
			? await addPost(newPostData)
			: await updatePost(newPostData);

	return {
		error: null,
		res: savedPost,
	};
};
