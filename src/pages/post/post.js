// Компонент для статьи (post)

import { useEffect, useLayoutEffect } from 'react';
import { useMatch, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PostContent, Comments, PostForm } from './components';
import { useDispatch } from 'react-redux';
import { useServerRequest } from '../../hooks';
import { loadPostAsync, RESET_POST_DATA } from '../../actions';
import { selectPost } from '../../selectors';

import styled from 'styled-components';

// контейнер
const PostContainer = ({ className }) => {
	const dispatch = useDispatch();
	const params = useParams(); // для получения id статьи
	const isCreating = useMatch('/post');
	const isEditing = useMatch('/post/:id/edit');
	const requestServer = useServerRequest();
	const post = useSelector(selectPost);

	// будем стерать данные о постах
	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA);
	}, [dispatch]);

	// получим данные с сервера данные о странице
	useEffect(() => {
		// делаем проверку на создание новой статьи
		if (isCreating) {
			return;
		}

		dispatch(loadPostAsync(requestServer, params.id));
	}, [requestServer, params.id, dispatch, isCreating]);

	return (
		<div className={className}>
			{isCreating || isEditing ? (
				<PostForm post={post} />
			) : (
				<>
					<PostContent post={post} />
					<Comments comments={post.comments} postId={post.id} />
				</>
			)}
		</div>
	);
};

// Стилизованный компонент
export const Post = styled(PostContainer)`
	margin: 40px 0;
	padding: 0 80px;
`;
