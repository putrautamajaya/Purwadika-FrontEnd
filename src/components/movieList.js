import React, { Component } from 'react';
import data from '../exData/movieList.json';


class movieList extends Component {

    state = { movies: [] }

    componentWillMount() {
        this.setState({ movies: data });
    }

    renderMovieList = () => {
        return this.state.movies.map( movie => <div><img src={movie.url} />{movie.title}<br/> {movie.description}</div> );
        //map itu fungsiny untuk. lakukan sesuatu di setiap property
    }

    render () {
        console.log(this.state.albums);
        return (
            <div>
                <h1>ini movieList</h1>
                
                <div className='displayGrid'>
                    {this.renderMovieList()}
                </div>
            </div>
            
        );
    }
}

export default movieList;