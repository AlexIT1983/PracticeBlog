// Наш экшн для выхода из аккаунта (logout)

import { ACTION_TYPE } from './action-type';
import { server } from '../bff';

// экшн креэйтер
export const logout = (session) => {
	server.logout(session);

	return {
		type: ACTION_TYPE.LOGOUT,
	};
};
