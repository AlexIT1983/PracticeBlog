// Компонент для комментария
import styled from 'styled-components';
import { Icon } from '../../../../../../components';
import { useDispatch } from 'react-redux';
import { removeCommentAsync } from '../../../../../../actions';
import { useServerRequest } from '../../../../../../hooks';
import { openModal, CLOSE_MODAL } from '../../../../../../actions';

// container
const CommentContainer = ({ className, id, author, content, publishedAt, postId }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();

	// функция для удаления комментария
	const onCommentRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить комментарий',
				onConfirm: () => {
					dispatch(removeCommentAsync(requestServer, postId, id));
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

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
			<Icon
				id="fa fa-trash-o"
				size="21px"
				margin="0 0 0 10px"
				onClick={() => {
					onCommentRemove(id);
				}}
			/>
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
