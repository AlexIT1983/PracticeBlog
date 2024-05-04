// утилита для подсчета количества комментариев под постом

export const getCommentsCount = (comments = [], postId) => {
	const postComments = comments.filter(
		({ postId: commentPostId }) => commentPostId === postId,
	);

	return postComments.length;
};
