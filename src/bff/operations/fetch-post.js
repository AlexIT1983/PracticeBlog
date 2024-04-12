// Функция запроса статьи  с сервера

import { getPost, getComments, getUsers } from '../api';

// fetchRoles - ручка для реализации запроса post async (функция асинхронная)
export const fetchPost = async (postId) => {
	// запрос статьи к базе данных
	const post = await getPost(postId);
	// запрос комментариев
	const comments = await getComments(postId);
	// console.log('comments', comments);
	//запрос пользователей
	const users = await getUsers();

	// запросим автора комментария
	const commentsWithAuthor = comments.map((comment) => {
		const user = users.find(({ id }) => id === comment.authorId);

		return {
			...comment,
			author: user?.login,
		};
	});

	console.log('commentsWithAutor', commentsWithAuthor);
	// возвращем рost and commentsWithAuthor()
	return {
		error: null,
		res: {
			...post,
			comments: commentsWithAuthor,
		},
	};
};
