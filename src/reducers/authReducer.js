const INITIAl_STATE = { username: "", email: "", error: "", cookieCheck: false};

export default (state = INITIAl_STATE, action) => {
    switch(action.type) {
        case "User berhasil login" :
            return action.payload;

        case "USER_LOGIN_FAIL" :
            return {...state, error: "Authentication Error"};

        case "USER_LOGOUT" :
            return INITIAl_STATE;
        
        case "cookie_Checked" :
            return {...state, cookieCheck: true};

        default:
            return state;
    } 
}