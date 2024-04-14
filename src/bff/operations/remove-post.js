// Операция по удалению статьи(post) с сервера.

import { deletePost, deleteComment, getComments } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../../constans';

// removePostComment - ручка для реализации запроса удаления comment async (функция асинхронная)
export const removePost = async (hash, id) => {
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

	// ждем удаления комментария
	await deletePost(id);

	// получим комментарии
	const comments = await getComments(id);

	// Завернем все в промисАлл
	Promise.all(comments.map(({ id: commentId }) => deleteComment(commentId)));

	// отправляем в ответе true
	return {
		error: null,
		res: true,
	};
};
