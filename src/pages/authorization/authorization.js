// Компонент для страницы авторизации
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { server } from '../../bff/server';
import { useEffect, useState } from 'react';
import { Input, Button, H2 } from '../../components';
import { useDispatch, useStore, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link, Navigate } from 'react-router-dom';
import { setUser } from '../../actions';
import { selectUserRole } from '../../selectors';
import { ROLE } from '../../constans';

// схема для формы
const authFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Заполните логин.')
		.matches(/^\w+$/, 'Неверно заполнен логин. Допускаются только буквы и цифры')
		.min(3, 'Неверно заполнен логин. Минимум 3 символа')
		.max(15, 'Неверно заполнен логин. Максимум 15 символов'),
	password: yup
		.string()
		.required('Заполните пароль')
		.matches(
			/^[\w#%]+$/,
			'Неверно заполнен пароль. Допускаются буквы, цифры и знаки # %',
		)
		.min(6, 'Неверно заполнен пароль. Минимум 6 символов')
		.max(30, 'Неверно заполнен пароль. Максимум 30 символов'),
});

// Стилизованая ссылка
const StyledLink = styled(Link)`
	text-align: center;
	text-decoration: underline;
	margin: 20px 0;
	font-size: 18px;
`;

// Стилизованый див
const ErrorMessage = styled.div`
	font-size: 18px;
	background-color: #fcadad;
	margin: 10px 0 0;
	padding: 10px;
`;

// компонент-контейнер авторизации
const AuthorizationContainer = ({ className }) => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(authFormSchema),
	});
	const dispatch = useDispatch();

	// сделаем небольшой локальный state
	const [serverError, setServerError] = useState(null);

	// достаем наш store через хук useStore
	const store = useStore();

	// получаем roleId
	const roleId = useSelector(selectUserRole);

	// Через хук useEffect будем делать сброс формы
	useEffect(() => {
		let currentWasLogout = store.getState().app.wasLogout;

		const unsubscribe = store.subscribe(() => {
			let previousWasLogout = currentWasLogout;
			currentWasLogout = store.getState().app.wasLogout;

			if (currentWasLogout !== previousWasLogout) {
				reset();
			}
		});
		return unsubscribe;
	}, [reset, store]);

	// функци onsubmit
	const onSubmit = ({ login, password }) => {
		server.authorize(login, password).then(({ error, res }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`);
				return;
			}
			dispatch(setUser(res));
		});
	};

	// объеденим ошибки валидации в один обработчик
	const formError = errors?.login?.message || errors?.password?.message;

	// объединение ошибки формы или сервера
	const errorMessage = formError || serverError;
	// делаем проверку на роль
	if (roleId !== ROLE.GUEST) {
		return <Navigate to="/" />;
	}

	return (
		<div className={className}>
			<H2>Авторизация</H2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					type="text"
					placeholder="Логин..."
					{...register('login', {
						onChange: () => setServerError(null),
					})}
				/>
				<Input
					type="password"
					placeholder="Пароль..."
					{...register('password', {
						onChange: () => setServerError(null),
					})}
				/>
				<Button type="submit" width="240px" disabled={!!formError}>
					Авторизоваться
				</Button>
				{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
				<StyledLink to="/register">Регистрация</StyledLink>
			</form>
		</div>
	);
};

// стилизованный компонент
export const Authorization = styled(AuthorizationContainer)`
	display: flex;
	align-items: center;
	flex-direction: column;

	& > form {
		display: flex;
		flex-direction: column;
		width: 260px;
	}
`;
