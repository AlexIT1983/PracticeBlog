// Отдельный метод для удаления статьи.

// сделаем метод DELETE на сервер, для статьи
export const deletePost = (postId) =>
	fetch(`http://localhost:3005/posts/${postId}`, {
		method: 'DELETE',
	});
