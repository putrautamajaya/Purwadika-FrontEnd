import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import AlbumList from './components/albumList';
import MovieList from './components/movieList';
import { Route } from 'react-router-dom';
import HomePage from './components/homePage';
import LoginPage from './components/loginPage';
import RegisterPage from './components/registerPage';
import MovieManage from './components/movieManage';

class App extends Component {
  state = { kucingIn: false, namaKucing: "Briana"}

  onClickBtnPress = () => {
    this.setState({kucingIn: true, namaKucing: "Putra"});
  }


  render() {
    console.log("render di jalankan");

    return (
      <div className="App">
        
        <Header 
          logIn = {this.state.kucingIn}
          username = {this.state.namaKucing}
        />

        <br/>
        <br/>
        <br/>

        <div>
          <Route exact path="/" component={ HomePage }/>
          <Route path="/albumlist" component={ AlbumList }/>
          <Route path="/movielist" component={ MovieList }/>
          <Route path="/login" component={ LoginPage }/>
          <Route path="/register" component={ RegisterPage }/>
          <Route path="/moviemanage" component={ MovieManage }/>
        </div>

        {/* <input type="button" className="btn btn-success" value="Login" onClick={this.onClickBtnPress}/>

        <br/>
        <br/>
        <br/>

        <AlbumList />
        
        <MovieList /> */}

      </div>
    );
  }
}

export default App;
