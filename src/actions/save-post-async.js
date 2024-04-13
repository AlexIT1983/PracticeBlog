// Асинхронный экшен для сохраннения редактируемого поста.

import { setPostData } from './set-post-data';

export const savePostAsync = (requestServer, newPostData) => (dispatch) =>
	requestServer('savePost', newPostData).then((updatedPost) => {
		dispatch(setPostData(updatedPost.res));
	});
