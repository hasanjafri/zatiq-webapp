import { API, GET_CUISINE } from '../constants'
import { searchCuisineUrl } from '../urls'

export const searchCuisine = (type) => ({
    type: API,
    payload: {
        url: searchCuisineUrl.replace(':cuisine', type),
        method: 'POST',
        body: { api_token: '' },
        request: () => ({ type: GET_CUISINE.REQUEST }),
        success: (data) => ({ type: GET_CUISINE.SUCCESS, data }),
        failure: (error) => ({ type: GET_CUISINE.FAILURE, error })
    }
});