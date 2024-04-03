// Функция для создания сессии
// функция принимает в себя roleId(роль) в зависимости от этого выдает разный результат

import { removeComment } from './session';
import { ROLE } from '../constans'; // константы с ролями

export const createSession = (roleId) => {
	const session = {
		logout() {
			Object.keys(session).forEach((key) => {
				delete session[key];
			});
		},
	}; // создадим объект c logout

	// наполняем объект по разному в зависимости от роли( используем switch case)
	switch (roleId) {
		case ROLE.ADMIN: {
			session.removeComment = removeComment;
			break;
		}
		case ROLE.MODERATOR: {
			session.removeComment = removeComment;
			break;
		}
		case ROLE.READER: {
			break;
		}
		case ROLE.GUEST: {
			break;
		}
		default: // ничего не делать
	}

	return session;
};
