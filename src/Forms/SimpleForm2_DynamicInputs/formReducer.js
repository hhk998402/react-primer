const formReducer = (state, action) => {
    switch(action.type){
        case "TEXT_INPUT":
            let oldState = [...state];
            let arrEntry = oldState[action.idx];
            arrEntry[action.name] = action.payload;
            oldState[action.idx] = arrEntry;
            return oldState;
        case "ADD_NEW_INPUT_GROUP":
            return [...state, action.payload];
        case "DEL_NEW_INPUT_GROUP":
            let prevState = [...state];
            prevState.pop();
            return prevState;
        default:
            return state;
    }
};

export default formReducer;