// Компонет обертка для отображение ошибки

import { useSelector } from 'react-redux';
import { Error } from '../error/error';
import { selectUserRole } from '../../selectors';
import { ERROR } from '../../constans';
import { checkAccess } from '../../utils';

// Компонент контент
export const PrivateContent = ({ children, access, serverError = null }) => {
	const userRole = useSelector(selectUserRole);

	const accessError = checkAccess(access, userRole) ? null : ERROR.ACCES_DENIED;
	const error = serverError || accessError;

	return error ? <Error error={error} /> : children;
};
