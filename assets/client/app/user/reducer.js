const reducerOne = (state, action) => {
    console.log("reducer state:", state);
    console.log("reducer action:", action);
    switch (action.type) {
        case "login":
            return true;
        case "logout":
            return false;
        default:
            return false;
    }
}

export default reducerOne;