// создаем метод для генерации случайной даты.
export const generateDate = () =>
	new Date(Math.random() * 1000000000000 + 1333333333333)
		.toISOString()
		.substring(0, 16)
		.replace('T', ' ');
