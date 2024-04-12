// Экшн для открытия модального окна
import { ACTION_TYPE } from './action-type';

export const openModal = (modelParams) => ({
	type: ACTION_TYPE.OPEN_MODAL,
	payload: modelParams,
});
