import React, { Component } from 'react';
import axios from 'axios';
import AlbumDetail from './albumDetail';
import '../App.css';

class albumList extends Component {

    state = { albums: [] }

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then( kucing => {
                console.log(kucing);
                this.setState({ albums: kucing.data });
            });
    }

    renderAlbumList = () => {
        return this.state.albums.map( album => <AlbumDetail key={album.title} title={album.title} url={album.url} img={album.image} /> );
    }

    render () {
        console.log(this.state.albums);
        return (
            <div>
                <h1>ini AlbumList</h1>
                
                <div className='displayGrid'>
                    {this.renderAlbumList()}
                </div>
            </div>
            
        );
    }
}

export default albumList;