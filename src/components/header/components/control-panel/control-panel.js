// Компонент для нашей панели пользователя

import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { Icon, Button } from '../../../../components';
import { ROLE } from '../../../../constans';
import { useSelector, useDispatch } from 'react-redux';
import {
	selectUserRole,
	selectUserLogin,
	selectUserSession,
} from '../../../../selectors';
import { logout } from '../../../../actions/logout';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

// стилизованный див for login
const UserName = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	font-size: 18px;
	font-weight: bold;
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const roleId = useSelector(selectUserRole); // получаем roleId
	const login = useSelector(selectUserLogin); // получаем login from state
	const session = useSelector(selectUserSession); // получаем session from user

	// функция выхода Logout
	const onLogout = () => {
		dispatch(logout(session));
		sessionStorage.removeItem('userData');
	};

	return (
		<div className={className}>
			<RightAligned>
				{roleId === ROLE.GUEST ? (
					<Button>
						<Link to="/login">Войти</Link>
					</Button>
				) : (
					<>
						<UserName>{login}</UserName>{' '}
						<Icon
							id="fa-sign-out"
							size="24px"
							margin="0 0 0 10px "
							onClick={onLogout}
						/>{' '}
					</>
				)}
			</RightAligned>
			<RightAligned>
				<Icon
					id="fa-backward"
					size="24px"
					margin="10px 0 0 0 "
					onClick={() => navigate(-1)}
				/>{' '}
				<Link to="/post">
					<Icon id="fa-file-text-o" size="24px" margin="10px 0 0 17px " />
				</Link>
				<Link to="/users">
					<Icon id="fa-users" size="24px" margin="10px 0 0 17px " />
				</Link>
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
