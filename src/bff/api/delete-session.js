// Отдельный метод для удаления сессии с сервера

// сделаем метод DELETE на сервер, пользователя
export const deleteSession = async (sessionId) => {
	fetch(`http://localhost:3005/sessions/${sessionId}`, {
		method: 'DELETE',
	});
};
