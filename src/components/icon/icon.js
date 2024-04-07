// Отдельный компонент для иконок, который принимает пропсы
import styled from 'styled-components';

// Создадим контейнер для иконки
const IconConteiner = ({ className, id, ...props }) => (
	<div className={className} {...props}>
		<i className={`fa ${id}`} aria-hidden="true"></i>
	</div>
);

// создаем стилизованный компонент для иконки
export const Icon = styled(IconConteiner)`
	font-size: ${({ size = '24xp' }) => size};
	margin: ${({ margin = '0' }) => margin};
	color: ${({ disabled }) => (disabled ? '#ccc' : '#000')};

	&:hover {
		cursor: pointer;
	}
`;
