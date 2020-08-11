const Reducer = (state, action) => {
    switch (action.type) {
        case 'SHOW_MENU':
            return {
                ...state,
                menu: action.payload
            };
        case 'CLOSE_MENU':
            return {
                ...state,
                menu: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;