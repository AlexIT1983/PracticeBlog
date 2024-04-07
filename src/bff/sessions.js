// Файл для сессий

export const sessions = {
	list: {},
	create(user) {
		const hash = Math.random().toFixed(50);
		this.list[hash] = user;
		return hash;
	},

	remove(hash) {
		delete this.list[hash];
	},
	access(hash, accessRoles) {
		const user = this.list[hash];
		// если пользователь есть и есть такая роль - то верннется true, иначе false
		return !!user && accessRoles.includes(user.roleId);
	},
};
