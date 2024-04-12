// Компонент для комментария
import styled from 'styled-components';
import { Icon } from '../../../../../../components';

// container
const CommentContainer = ({ className, id, author, content, publishedAt }) => {
	return (
		<div className={className}>
			<div className="comment">
				<div className="information-panel">
					<div className="author">
						<Icon
							id="fa fa-user-circle-o"
							size="18px"
							margin="0 0 0 0px"
							onClick={() => {}}
						/>
						{author}
					</div>
					<div className="pubished-at">
						<Icon
							id="fa fa-calendar-o"
							size="18px"
							margin="0 0 0 10px"
							onClick={() => {}}
						/>
						{publishedAt}
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			<Icon id="fa fa-trash-o" size="21px" margin="0 0 0 10px" onClick={() => {}} />
		</div>
	);
};

// styled component
export const Comment = styled(CommentContainer)`
	display: flex;
	margin-top: 10px;

	& .comment {
		width: 550px;
		padding: 5px 10px;
		border: 1px solid #000;
	}

	& .information-panel {
		display: flex;
		justify-content: space-between;
	}
	& .athor {
		display: flex;
	}
	& .published-at {
		display: flex;
	}
`;
