REDUX
1. npm install --save redux 
2. npm install --save react-redux 

3. di index.js ketik
    import { Provider } from 'react-redux';
    import { createStore } from 'redux';
    import reducers from './reducers';

    const store = createStore( reducers );

    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>, 
    document.getElementById('root'));

4. bikin folder baru 'reducer' di dlm folder src.
5. di folder reducer bikin file index.js gunany untuk create global state.
    isi default index.js

    import { combineReducers } from 'redux';

    export default combineReducers(
        {

        }
    );

6. bikin component reducer

    const INITIAL_STATE = [{ username: "Putra", email: "putra@gmail.com", password: "123456"},
                           { username: "Baron", email: "baron@hotmail.com", password: "654321"}]

    export default ( state=INITIAL_STATE, action) => {
    return state;
    }

7. import component reducer ke index.js

    import { combineReducers } from 'redux';
    import usersReducer from './usersReducer';
    import authReducer from './authReducer';

    export default combineReducers(
        {
        }
    );

8. di index.js bikin property buat global stateny. 
    isi propertiny yg di import dari component reducer. 

        import { combineReducers } from 'redux';
        import usersReducer from './usersReducer';
        import authReducer from './authReducer';

        export default combineReducers(
            {
                users: usersReducer,
                auth: authReducer
            }
        );

CARA NGAMBIL DATA GLOBAL STATE

1.  kalau mau ambil data atau kirim data pakai function connect().

        import { connect } from 'react-redux';

2.  di file yg kita mau masukin data ('loginPage.js') kesana kita bikin function buat ambil global stateny 
    
    const mapStateToProps = (state) => {
        
        const users = state.users;
        const auth = state.auth;

        return { usersFriendly: users, theAuth: auth };
    }

    export default connect(mapStateToProps)(loginPage);

3. mapStateToProps itu isiny globalstate dari index.js reducer . 
    trus dia jadi isiny parameter 'state' di function .
    trus returnnya kita bisa pakai datanya .

CARA NGIRIM DATA KE GLOBALSTATE

1. create action createStore . 
2. carany pertama create folder actionCreator di folder src . 
3. di dalam folder actionCreator create file index.js . 
    isi defaultny seperti ini: 

    export const onLoginSuccess = (user) => {
        return {
            type: "User berhasil login",
            payload: user
        };
    };

    onLoginSuccess itu terserah mau apa namany sebenerny tergantung kegunaanny.

4. lalu di reducer yg di tuju bikin pengenal suapaya dia ngerti actionny. 
    pengenalny itu 'type' kalau sama dia bakal jalan. 
    contohny kita mau kirim data ke authReducer . 

    const INITIAl_STATE = { username: "", email: ""};

    export default (state = INITIAl_STATE, action) => {
        switch(action.type) {
            case "User berhasil login" :
                return action.payload;
            default:
                return state;
        } 
    }

5. lalu setelah di update nanti dia kirim ke global state . 

6. cara kita gunain actionCreator yg kita buat di langkat ke 3 . 
    kita import action kita dari actionCreator . 

    import { onLoginSuccess } from '../actionCreator';

    dalam contoh ini kita import ke file loginPage . 

7.  untuk pakai actionnya kita ketik ini dimana kita butuh action ini di jalankan .    

    this.props.onLoginSuccess({ username, email});
        username sama email adalah data yg kita mau kirim ke globalstate . 