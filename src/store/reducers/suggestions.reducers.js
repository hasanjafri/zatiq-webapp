import { GET_CUISINE } from '../constants';
import { saveParams, deleteParams, createParams } from './_base.reducers';

const name = 'suggestions';

const initialState = {
	saveLoading: 0,
	saveSuccess: false,
	deleteLoading: 0,
	allLoading: 0,

	suggestions: [],
	suggestionsById: {},
};

export default (state = initialState, payload) => {
	const { type, data } = payload;
	switch (type) {
		case GET_CUISINE.REQUEST:
			return {
				...state,
				saveSuccess: false,
				saveLoading: state.saveLoading + 1,
			}
		case GET_CUISINE.SUCCESS:
			const { form } = data;
			return {
				...saveParams({ name, state, form }),
				saveLoading: state.saveLoading - 1,
				saveSuccess: true
			}
		case GET_CUISINE.FAILURE:	
			return {
				...state,
				saveLoading: state.saveLoading - 1,
			}
		default:
			return state;
	}
};