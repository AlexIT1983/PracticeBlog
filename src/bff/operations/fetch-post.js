// Функция запроса статьи  с сервера

import { getPost } from '../api';
import { getPostCommentsWithAuthor } from '../utils';

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

	// получим автора через нашу утилиту
	const commentsWithAuthor = await getPostCommentsWithAuthor(postId);

	// возвращем рost and commentsWithAuthor()
	return {
		error: null,
		res: {
			...post,
			comments: commentsWithAuthor,
		},
	};
};
