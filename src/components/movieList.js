import React, { Component } from 'react';
import axios from 'axios';
import { API_URL_1 } from '../supports/API-url/apiurl';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


class movieList extends Component {

    state = { movies: [] }

    componentWillMount() {
        axios.get( API_URL_1 + "/movies" )
            .then( movie => {
                console.log(movie);
                this.setState({ movies: movie.data });
            });
    }

    renderMovieList = () => {
        return this.state.movies.map( movie => <div><img src={movie.url} />{movie.title}<br/> {movie.description}</div> );
        //map itu fungsiny untuk. lakukan sesuatu di setiap property
    }

    render () {
        console.log(this.state.albums);
        if(this.props.auth.cookieCheck === true) {
            
        }
        if(this.props.auth.username != ""){
            return (
                <div>
                    <h1>ini movieList</h1>
                    
                    <div className='displayGrid'>
                        {this.renderMovieList()}
                    </div>
                </div>
                
            );
        }
        
        return <Redirect to="/login" />
    }
}
const mapStateToProps = (state) => {
    return {auth: state.auth};
}

export default connect(mapStateToProps)(movieList);