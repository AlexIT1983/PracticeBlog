// Компонент для статьи

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PostContent, Comments } from './components';
import { useDispatch } from 'react-redux';
import { useServerRequest } from '../../hooks';
import { loadPostAsync } from '../../actions';
import { selectPost } from '../../selectors';
import styled from 'styled-components';

// контейнер
const PostContainer = ({ className }) => {
	const dispatch = useDispatch();
	const params = useParams(); // для получения id статьи
	const requestServer = useServerRequest();
	const post = useSelector(selectPost);

	// получим данные с сервера данные о странице
	useEffect(() => {
		dispatch(loadPostAsync(requestServer, params.id));
	}, [requestServer, params.id, dispatch]);

	return (
		<div className={className}>
			<PostContent post={post} />
			<Comments comments={post.comments} postId={post.id} />
		</div>
	);
};

// Стилизованный компонент
export const Post = styled(PostContainer)`
	margin: 40px 0;
	padding: 0 80px;
`;
