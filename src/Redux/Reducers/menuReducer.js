const initialState = false


export const menuReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'menu':
            return action.payload
        default:
            return state
    }
    

    
}