const reducerOne = (state, action) => {
    switch (action.type) {
        case "login":
            return ({ authenticated: true });
        case "logout":
            return ({ authenticated: false });
        default:
            return ({ authenticated: false });
    }
}

export default reducerOne;