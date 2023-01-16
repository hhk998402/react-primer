const formReducer = (state, action) => {
    switch(action.type){
        case "HANDLE_INPUT":
            let oldState = {...state};
            oldState[action.key] = action.payload;
            return oldState;
        case "MODAL_FORM_DATA":
            let prevState = {...state};
            console.log(action);
            if(!prevState[action.key]){
                prevState[action.key] = [];
            }
            if(action.idx == null){
                prevState[action.key].push(action.payload);
            } else{
                prevState[action.key][action.idx] = action.payload;
            }
            return prevState;
        default:
            return state;
    }
}

export default formReducer;