const INITIAL_STATE = {
    desktopView: true
}

const desktopReducer = (state = INITIAL_STATE, action) =>
{
    switch (action.type) {
        case 'SET_DESKTOP':
            {
            console.log("Setting Desktop");
            return {
                ...state,
                desktopView: action.payload
            }
        }
        default:
            {
                console.log("Default Action");
                console.log(action);
            return state;
            }
    }
}

export default desktopReducer;