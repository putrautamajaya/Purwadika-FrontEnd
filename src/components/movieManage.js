import React, { Component } from 'react';
import axios from 'axios';
import { API_URL_1 } from '../supports/API-url/apiurl';
import { connect } from 'react-redux';
import { onMovieRegister } from '../actionCreator';


class movieManage extends Component {
    state = { listOfMovie: [] }

    componentWillMount() {
        axios.get( API_URL_1 + "/movies" )
            .then( movie => {
                console.log(movie);
                this.setState({ listOfMovie: movie.data });
            });
    }

    renderMovieList = () => {
        return this.state.listOfMovie.map( movie => 
        <tr>
            <td>{movie.title}</td>
            <td>{movie.description}</td>
            <td>{movie.url}</td>
        </tr>
        );
    }

    onDaftarClick = () => {
        this.props.onMovieRegister({
            title: this.refs.title.value,
            description: this.refs.description.value,
            url: this.refs.url.value,
        });
    }

    render() {
        return (
            <div className="container text-left">

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Url</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.renderMovieList()}
                    </tbody>
                </table>  
                
                <h2>Register Your Movie</h2>
                <form>
                    <div className="form-group">
                    <label for="usr">Movie Title:</label>
                    <input type="text" className="form-control" ref="title" id="title"/>
                    </div>
                    <div className="form-group">
                    <label for="pwd">Description</label>
                    <input type="text" className="form-control" ref="description" id="description"/>
                    </div>
                    <div className="form-group">
                    <label for="pwd">URL</label>
                    <input type="text" className="form-control"ref="url" id="url"/>
                    </div>

                    <input type="button" value="Daftar" onClick={this.onDaftarClick} />
                </form>
            </div>
                
                
            
        );        
    }
}

export default connect(null,{onMovieRegister})(movieManage);