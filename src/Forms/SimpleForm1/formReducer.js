const formReducer = (state, action) => {
    switch(action.type){
        case "TEXT_INPUT": 
            return{
                ...state,
                [action.name]:action.payload
            };
            break;
        default:
            return state;
    }
};

export default formReducer;