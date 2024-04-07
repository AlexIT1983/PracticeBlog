// Наш компонент для страницы пользователи

import { H2, Content } from '../../components';
import { TableRow, UserRow } from './components';
import { useServerRequest } from '../../hooks';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { ROLE } from '../../constans';

const UserContainer = ({ className }) => {
	// создадим состояние для списка ролей, пользователей и ошибки
	const [errorMessage, setErrorMessage] = useState(null);
	const [roles, setRoles] = useState([]);
	const [users, setUsers] = useState([]);
	const [shouldUpdateUserList, setshouldUpdateUserList] = useState(false);

	// запрос от сервера (вернет функцию)
	const requestServer = useServerRequest();

	// в хуке useEffect делаем запрос к серверу.
	useEffect(() => {
		Promise.all([requestServer('fetchUsers'), requestServer('fetchRoles')]).then(
			([usersRes, rolesRes]) => {
				if (usersRes.error || rolesRes.error) {
					setErrorMessage(usersRes.error || rolesRes.error);
					return;
				}

				setUsers(usersRes.res);
				setRoles(rolesRes.res);
			},
		);
	}, [requestServer, shouldUpdateUserList]);

	// функция для удаления пользователя
	const onUserRomove = (userId) => {
		requestServer('removeUser', userId).then(() => {
			setshouldUpdateUserList(!shouldUpdateUserList);
		});
	};

	return (
		<div className={className}>
			<Content error={errorMessage}>
				<H2>Пользователи</H2>
				<div>
					<TableRow>
						<div className="login-column">Логин</div>
						<div className="registered-at-column">Дата регистрации</div>
						<div className="role-column">Роль</div>
					</TableRow>

					{users.map(({ id, login, roleId, registeredAt }) => (
						<UserRow
							key={id}
							id={id}
							login={login}
							roleId={roleId}
							registeredAt={registeredAt}
							roles={roles.filter(
								({ id: roleId }) => roleId !== ROLE.GUEST,
							)}
							onUserRomove={() => onUserRomove(id)}
						/>
					))}
				</div>
			</Content>
		</div>
	);
};

// стилизованный компонент пользователи
export const Users = styled(UserContainer)`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 570px;
	margin: 0 auto;
	font-size: 18px;
`;
