// Компонет для главной станицы ( main)
import { useEffect, useState } from 'react';
import { Pagination, PostCard } from './components';
import { useServerRequest } from '../../hooks';
import { PAGINATION_LIMIT } from '../../constans';
import { getLastPageFromLinks } from './utils';
import styled from 'styled-components';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const requestServer = useServerRequest();

	useEffect(() => {
		// в хуке useEffect делаем запрос к серверу.
		requestServer('fetchPosts', page, PAGINATION_LIMIT).then(
			({ res: { posts, links } }) => {
				setPosts(posts);
				setLastPage(getLastPageFromLinks(links));
			},
		);
	}, [requestServer, page]);

	return (
		<div className={className}>
			<div className="post-list">
				{posts.map(({ id, title, imageUrl, publishedAt, commentsCount }) => (
					<PostCard
						key={id}
						id={id}
						title={title}
						imageUrl={imageUrl}
						publishedAt={publishedAt}
						commentsCount={commentsCount}
					/>
				))}
			</div>
			{lastPage > 1 && (
				<Pagination lastPage={lastPage} page={page} setPage={setPage} />
			)}
		</div>
	);
};

// стилизованный компонент

export const Main = styled(MainContainer)`
	& .post-list {
		display: flex;
		flex-wrap: wrap;
		padding: 20px;
	}
`;
