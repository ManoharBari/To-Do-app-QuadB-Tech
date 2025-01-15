const taskReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.payload];
        case 'DELETE_TASK':
            return state.filter((_, index) => index !== action.payload);
        default:
            return state;
    }
};

export default taskReducer;
