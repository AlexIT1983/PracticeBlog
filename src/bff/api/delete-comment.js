// Отдельный метод для удаления комментария на сервере

// сделаем метод DELETE на сервер, пользователя
export const deleteComment = async (commentId) => {
	fetch(`http://localhost:3005/comments/${commentId}`, {
		method: 'DELETE',
	});
};
