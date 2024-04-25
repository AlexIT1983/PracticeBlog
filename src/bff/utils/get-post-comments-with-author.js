// отдельная утилита для получения автора комментария
import { getComments, getUsers } from '../api';

export const getPostCommentsWithAuthor = async (postId) => {
	// запрос комментариев
	const comments = await getComments(postId);

	//запрос пользователей
	const users = await getUsers();

	// вернет автора комментария
	return comments.map((comment) => {
		const user = users.find(({ id }) => id === comment.authorId);

		return {
			...comment,
			author: user?.login,
		};
	});
};
