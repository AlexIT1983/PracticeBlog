// Отдельный метод для выхода
import { sessions } from '../sessions';

// сделаем logout
export const logout = async (userSession) => {
	sessions.remove(userSession);
};
