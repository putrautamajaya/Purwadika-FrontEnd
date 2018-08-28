import axios from 'axios';
import { API_URL_1 } from '../supports/API-url/apiurl';
import App from '../App';

export const onLogin = (user) => {
    return(dispatch) => {

        axios.get(API_URL_1 + '/users', { 
            params: {
                email: user.email,
                password: user.password
            }
        }).then(user => {
            console.log(user);
            dispatch ({
                type: "User berhasil login",
                payload:{
                    username: user.data[0].username,
                    email: user.data[0].email,
                    error: ""   
                } 
            });
    
        }).catch( err => {
            console.log(err);
            dispatch ({
                type: "USER_LOGIN_FAIL"
            });
            
        })
    }
    
};

export const onLogout = () => {
    return {
        type: "USER_LOGOUT"
    };
}


export const onRegister = (user) => {
    return (dispatch) => {
        axios.post(API_URL_1 + '/users', user)
        .then((response) => {
            console.log(response);
            dispatch ({
                type: "User berhasil login",
                payload:{
                    username: response.data.username,
                    email: response.data.email,
                    error: ""   
                } 
            });
        })
        .catch((error) => {
            console.log(error);
        })
    };
}
// cara panjangny yg atas.
// export const onRegister = (user) => {
//     return (dispatch) => {
//         axios.post(API_URL_1 + '/users', {
//             username: user.username,
//             email: user.email,
//             password: user.password
//         })
//     };
// }

export const onMovieRegister = (movie) => {
    return (dispatch) => {
        axios.post(API_URL_1 + '/movies', movie)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    };
}