const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_RUB_CURRENCY':
            return {
                ...state,
                currency: "rub"
            };
        case 'SET_DOLLAR_CURRENCY':
            return {
                ...state,
                currency: "dollar"
            };
        case 'SET_EURO_CURRENCY':
            return {
                ...state,
                currency: "euro"
            };
        case 'IS_AUTH_PAGE':
            return {
                ...state,
                isAuthPage: action.isAuthPage
            }
        default:
            return state;
    }
};

export default reducer;
