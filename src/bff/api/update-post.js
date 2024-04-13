// Отдельный метод для установки новой отредактированной статьи.

// сделаем метод POST на сервер, нового пользователя
export const updatePost = ({ id, imageUrl, title, content }) =>
	fetch(`http://localhost:3005/posts/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			image_url: imageUrl,
			title,
			content,
		}),
	}).then((loadedPost) => loadedPost.json());
