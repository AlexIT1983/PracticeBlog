// Отдельная функция асинхронная для получения пользователя
//

export const getUsers = () =>
	fetch('http://localhost:3005/users').then((loadedUsers) => loadedUsers.json());
