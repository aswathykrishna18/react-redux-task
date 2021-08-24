const actions = {
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGOUT: "LOGOUT",
    loginSuccess: () => ({
        type: actions.LOGIN_SUCCESS
    }),
    logout: () => ({
        type: actions.LOGOUT
    })
}

export default actions;