// Функция запроса статьи  с сервера

import { getPost, getComments, getUsers } from '../api';

// fetchRoles - ручка для реализации запроса post async (функция асинхронная)
export const fetchPost = async (postId) => {
	// задаем статью и ошибку
	let post;
	let error;
	// обработаем ошибку через try catch
	try {
		// запрос статьи к базе данных
		post = await getPost(postId);
	} catch (postError) {
		error = postError;
	}
	if (error) {
		return {
			error,
			res: null,
		};
	}

	// запрос комментариев
	const comments = await getComments(postId);

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

	// возвращем рost and commentsWithAuthor()
	return {
		error: null,
		res: {
			...post,
			comments: commentsWithAuthor,
		},
	};
};
