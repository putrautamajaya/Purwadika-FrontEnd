export const onLoginSuccess = (user) => {
    return {
        type: "User berhasil login",
        payload: user
    };
};