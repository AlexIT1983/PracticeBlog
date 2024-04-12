// Функция запроса и добавления комментариев  с сервера
import { addComment, getComments, getPost } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../../constans';

// addComment - ручка для реализации запроса comment async (функция асинхронная)
export const addPostComment = async (hash, postId, userId, content) => {
	// получаем списко ролей для пользователей
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];

	// проверяем пользователя, если найден - это проблема, мы остановимся
	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	// ждем добавления комментария
	await addComment(postId, userId, content);

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
