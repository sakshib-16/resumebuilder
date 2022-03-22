// import action from './action'

const initialState = {}


export const authReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'auth':
            return {
                ...state, ...action.payload
            }
        default:
            return state
    }
    

    
}