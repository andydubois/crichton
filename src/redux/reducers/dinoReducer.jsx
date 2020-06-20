const dinoReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_DINOS":
            return action.payload;
        default:
            return state;
    }
};

export default dinoReducer;