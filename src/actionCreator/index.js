import axios from 'axios';
import { API_URL_1 } from '../supports/API-url/apiurl';

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
                    email: user.data[0].email
                } 
            });
    
        }).catch( err => {
            console.log(err);
            dispatch ({
                type: "USER_LOGIN_FAIL "
            });
            
        })
    }

    

    
};