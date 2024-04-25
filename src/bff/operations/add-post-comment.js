// Функция запроса и добавления комментариев  с сервера
import { addComment, getPost } from '../api';
import { getPostCommentsWithAuthor } from '../utils';
import { sessions } from '../sessions';
import { ROLE } from '../../constans';

// addComment - ручка для реализации запроса comment async (функция асинхронная)
export const addPostComment = async (hash, postId, userId, content) => {
	// получаем список ролей для пользователей
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

	// получим автора через нашу утилиту
	const commentsWithAuthor = await getPostCommentsWithAuthor(postId);

	// отправляем пост в ответе
	return {
		error: null,
		res: {
			...post,
			comments: commentsWithAuthor,
		},
	};
};
