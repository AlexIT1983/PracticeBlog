// отдельная функция (операция) по запросу статей

import { getComments, getPosts } from '../api';
import { getCommentsCount } from '../utils';

// fetchPosts - ручка для реализации запроса статей async (функция асинхронная)
export const fetchPosts = async (searchPhrase, page, limit) => {
	// сделаем запрос статей комментариев в одном запросе
	const [{ posts, links }, comments] = await Promise.all([
		getPosts(searchPhrase, page, limit),
		getComments(),
	]);

	// если все в порядке возвращем роли
	return {
		error: null,
		res: {
			posts: posts.map((post) => ({
				...post,
				commentsCount: getCommentsCount(comments, post.id),
			})),
			links,
		},
	};
};
