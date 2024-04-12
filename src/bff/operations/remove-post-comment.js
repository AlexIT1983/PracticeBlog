// Операция по удалению комментария с сервера.

import { deleteComment, getComments, getPost } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../../constans';

// removePostComment - ручка для реализации запроса удаления comment async (функция асинхронная)
export const removePostComment = async (hash, postId, id) => {
	// получаем списко ролей для пользователей
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR];

	// проверяем пользователя, если найден - это проблема, мы остановимся
	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	// ждем удаления комментария
	await deleteComment(id);

	// после получаем данные о посте
	const post = await getPost(postId);

	const comments = await getComments(postId);

	// отправляем пост в ответе
	return {
		error: null,
		res: {
			...post,
			comments,
		},
	};
};
