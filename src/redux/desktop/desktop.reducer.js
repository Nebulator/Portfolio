const INITIAL_STATE = {
    desktopView: true
}

const desktopReducer = (state = INITIAL_STATE, action) =>
{
    switch (action.type) {
        case 'SET_DESKTOP':
            return {
                ...state,
                desktopView: action.payload
            }
        default:
            {
                return state;
            }
    }
}

export default desktopReducer;