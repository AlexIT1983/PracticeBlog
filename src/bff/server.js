// Наш эмулированный BFF (Backend for Frontend)

import {
	authorize,
	logout,
	register,
	fetchRoles,
	fetchUsers,
	updateUserRole,
	removeUser,
} from './operations';

// сделаем его в виде объекта
export const server = {
	// теперь тут будет отдельная функция logout
	logout,
	// тут будет authorize
	authorize,
	// register
	register,
	// fetchRoles (запрос ролей) только админ
	fetchRoles,
	// fetchUsers (запрос пользователей) только админ
	fetchUsers,
	// updateUserRole ( запрос на смену роли пользователя)
	updateUserRole,
	// removeUser (запрос на удаление пользователя)
	removeUser,
};
