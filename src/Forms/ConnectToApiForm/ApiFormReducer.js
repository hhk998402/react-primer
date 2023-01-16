const ApiFormReducer = (state, action) => {
    switch(action.type){
        case "TEXT_INPUT":
            let oldState = [...state];
            oldState[action.idx][action.key] = action.payload;
            return oldState;
        case "UPDATE_FROM_API":
            return action.payload;
        default:
            return state;
    }
}

export default ApiFormReducer;