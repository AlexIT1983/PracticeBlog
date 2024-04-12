// Компонент для контента статьи

import styled from 'styled-components';
import { H2, Icon } from '../../../../components';

const PostContentContainer = ({
	className,
	post: { id, title, imageUrl, content, publishedAt },
}) => {
	return (
		<div className={className}>
			<img src={imageUrl} alt={title} />
			<H2>{title}</H2>
			<div className="special-panel">
				<div className="published-at">
					<Icon
						id="fa fa-calendar-o"
						size="18px"
						margin="0 10px 0 0"
						onClick={() => {}}
					/>
					{publishedAt}
				</div>
				<div className="buttons">
					<Icon
						id="fa fa-pencil-square-o"
						size="21px"
						margin="0 0 0 20px"
						onClick={() => {}}
					/>
					<Icon
						id="fa fa-trash-o"
						size="21px"
						margin="0 0 0 10px"
						onClick={() => {}}
					/>
				</div>{' '}
			</div>
			<div className="post-text">{content}</div>
		</div>
	);
};

// стилизованный
export const PostContent = styled(PostContentContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}
	& .special-panel {
		margin: -20px 0 20px;

		display: flex;
		justify-content: space-between;
	}
	& .published-at {
		display: flex;
		font-size: 18px;
	}

	& .buttons {
		display: flex;
	}
	& .post-text {
		font-size: 18px;
	}
`;
