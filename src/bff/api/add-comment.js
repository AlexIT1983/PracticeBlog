// Функция добавление комментария
import { generateDate } from '../utils/generate.-date';

// сделаем метод POST на сервер, нового пользователя
export const addComment = (postId, userId, content) =>
	fetch('http://localhost:3005/comments', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			post_id: postId,
			author_id: userId,
			content,
			published_at: generateDate(),
		}),
	});
