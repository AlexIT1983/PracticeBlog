// Отдельный метод для установки новой роли пользователя.

// сделаем метод POST на сервер, нового пользователя
export const setUserRole = (userId, roleId) =>
	fetch(`http://localhost:3005/users/${userId}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			role_id: roleId,
		}),
	}).then((createdUser) => createdUser.json());
