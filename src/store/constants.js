export const createAsyncConst = name => ({
    REQUEST: `[REQUEST] ${name}`,
    SUCCESS: `[SUCCESS] ${name}`,
    FAILURE: `[FAILURE] ${name}`
})

export const API = 'API'

export const GET_CUISINE = createAsyncConst('GET_CUISINE')