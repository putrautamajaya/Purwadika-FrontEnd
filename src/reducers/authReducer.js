const INITIAl_STATE = { username: "", email: ""};

export default (state = INITIAl_STATE, action) => {
    switch(action.type) {
        case "User berhasil login" :
            return action.payload;
        default:
            return state;
    } 
}