import { API } from '../constants'

const api = ({ dispatch }) => next => action => {
    if (action.type !== API) {
        return next(action);
    }
    const {
        url,
        success,
        failure,
        request,
        method,
        options,
        body,
        formatData
    } = action.payload;

    request && dispatch(request());

    const requestOptions = {
        method: method ? method : 'GET',
        body: body ? JSON.stringify(body) : undefined,
        headers: {
            'Content-Type': 'application/json'
        },
        ...options
    };

    // Send request
    fetch(url, requestOptions).then(response => {
        // Receive response
        const { ok, status } = response;
        if (status === 204) {
            const data = formatData ? formatData() : {};
            if (success) {
                dispatch(success(data));
            }
        } else {
            // Parse JSON
            response.json()
                .then(json => {
                    const isSuccess = ok && (status >= 200 && status < 204);
                    if (isSuccess) {
                        const data = formatData ? formatData(json.data) : { data: json.data };
                        if (success) {
                            dispatch(success(data));
                        }
                    } else {
                        const errorMessage = parseErrorMessage(json);
                        dispatch(failure(errorMessage));
                    }
                })
                .catch(e => {
                    console.log(e)
                });
        }
    });
};

const parseErrorMessage = (data) => {
    const { errors, code } = data;
    if (errors && errors.message) {
        return errors.message;
    }
    if (code === 401) {
        return 'Could not authenticate. Please enter a valid email and password.'
    }
}

export default api;
