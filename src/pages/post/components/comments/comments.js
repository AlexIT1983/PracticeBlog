// Компонент для комментариев

import { useState } from 'react';
import { Icon } from '../../../../components';
import { Comment } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserId, selectUserRole } from '../../../../selectors';
import { useServerRequest } from '../../../../hooks';
import { addCommentAsync } from '../../../../actions';
import { ROLE, PROP_TYPES } from '../../../../constans';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentsContainer = ({ className, comments, postId }) => {
	const [newComment, setNewComment] = useState('');
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const userId = useSelector(selectUserId);
	const userRole = useSelector(selectUserRole);

	const onNewCommentAdd = (postId, userId, content) => {
		dispatch(addCommentAsync(requestServer, postId, userId, content));
		setNewComment('');
	};

	// проверям на роль гостя
	const isGuest = userRole === ROLE.GUEST;

	return (
		<div className={className}>
			{!isGuest && (
				<div className="new-comment">
					<textarea
						name="comment"
						value={newComment}
						placeholder="Комментарий"
						onChange={({ target }) => setNewComment(target.value)}
					></textarea>
					<Icon
						id="fa fa-paper-plane-o"
						size="21px"
						margin="0 0 0 10px"
						onClick={() => onNewCommentAdd(postId, userId, newComment)}
					/>
				</div>
			)}

			<div className="comments">
				{comments.map(({ id, author, publishedAt, content }) => (
					<Comment
						key={id}
						id={id}
						postId={postId}
						author={author}
						content={content}
						publishedAt={publishedAt}
					/>
				))}
			</div>
		</div>
	);
};

// стилизованный
export const Comments = styled(CommentsContainer)`
	width: 580px;
	margin: 0 auto;

	& .new-comment {
		display: flex;
		width: 100%;
		margin: 20px 0 0;
	}
	& .new-comment textarea {
		width: 550px;
		height: 120px;
		font-size: 18px;
		resize: none;
	}
`;

// типизация компонента
Comments.propTypes = {
	comments: PropTypes.arrayOf(PROP_TYPES.COMMENT).isRequired,
	postId: PropTypes.string.isRequired,
};
