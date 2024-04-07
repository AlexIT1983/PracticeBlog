// Наш кастомный хук для запроса на сервер для получения ролей
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { selectUserSession } from '../selectors';
import { server } from '../bff';

// кастомный хук

export const useServerRequest = () => {
	const session = useSelector(selectUserSession);

	// сделаем выборочный запрос request
	return useCallback(
		(operation, ...params) => {
			const request = ['register', 'authorize'].includes(operation)
				? params
				: [session, ...params];
			// возвращаем операции и request
			return server[operation](...request);
		},
		[session],
	);
};
