// Фукнция трансформер для User
// берез пользователя из БД и возвращает обычного пользователя.

export const transformUser = (dbUser) => ({
	id: dbUser.id,
	login: dbUser.login,
	password: dbUser.password,
	registeredAt: dbUser.registed_at,
	roleId: dbUser.role_id,
});
