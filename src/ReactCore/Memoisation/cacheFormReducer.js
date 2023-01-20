const cacheFormReducer = (state, action) => {
    switch(action.type){
        case "ADD_TO_CACHE":
            let cacheState = {...state}; //Return new copy to prevent stale state
            if(!action.key || action.key.length == 0){
                return cacheState;
            }
            cacheState[action.key] = action.payload;
            return cacheState;
        default:
            return state;
    }
};

export default cacheFormReducer;