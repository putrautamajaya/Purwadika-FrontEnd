// 1. npm install --save react-router-dom 
// 2. index.js, import { BrowserRouter } from 'react-router-dom';
// 3. bungkus <apps/> di index.js dengan 
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
// 4. di apps.js import { Route } from 'react-router-dom';
// 5. create path di apps.js
//     note: header selalu di apps.js
//     <div>
//         //pakai exact supaya ga di setiap page muncul carouselny
//     <Route exact path="/" component={ HomePage }/>
//     <Route path="/albumlist" component={ AlbumList }/>
//     <Route path="/movielist" component={ MovieList }/>
//     </div>

//     jangan lupa import component nya
//         import AlbumList from './components/albumList';
//         import MovieList from './components/movieList';
//         import HomePage from './components/homePage';

// 6. import { Link } from 'react-router-dom'; di setiap component yg mau di Link
//     create link di tempat yg kita mau
//     <Link to="/albumlist">
//         Album List
//     </Link>