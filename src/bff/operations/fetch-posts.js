// отдельная функция (операция) по запросу статей

import { getComments, getPosts } from '../api';
import { getCommentsCount } from '../utils';

// fetchPosts - ручка для реализации запроса статей async (функция асинхронная)
export const fetchPosts = async () => {
	// сделаем запрос статей комментариев в одном запросе
	const [posts, comments] = await Promise.all([getPosts(), getComments()]);

	// если все в порядке возвращем роли
	return {
		error: null,
		res: posts.map((post) => ({
			...post,
			commentsCount: getCommentsCount(comments, post.id),
		})),
	};
};
