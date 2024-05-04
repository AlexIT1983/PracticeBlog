// Фукнция трансформер для Session

export const transformSession = (dbSession) => ({
	id: dbSession.id,
	hash: dbSession.hash,
	user: dbSession.user,
});
