// Функция добавление новой статьи

import { generateDate } from '../utils/generate.-date';

// сделаем метод POST на сервер, новой статьи
export const addPost = ({ title, imageUrl, content }) =>
	fetch('http://localhost:3005/posts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			image_url: imageUrl,
			published_at: generateDate(),
			title,
			content,
		}),
	}).then((createdPost) => createdPost.json());
