// Метод получения ролей с сервера

export const getRoles = () =>
	fetch('http://localhost:3005/roles').then((loadedRoles) => loadedRoles.json());
