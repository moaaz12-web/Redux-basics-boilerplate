const loggedreducer = (state = true, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return !state
        default:
            return state;
    }
}

export default loggedreducer;