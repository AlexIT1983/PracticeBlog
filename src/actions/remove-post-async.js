// Наш асинхронный экшен для удаления post

export const removePostAsync = (requestServer, id) => () =>
	requestServer('removePost', id);
