import React, { Component } from 'react';
import axios from 'axios';
import { API_URL_1 } from '../supports/API-url/apiurl';
import { connect } from 'react-redux';
import { onMovieRegister } from '../actionCreator';
import MovieManageDetail from './movieManageDetail';


class movieManage extends Component {
    state = { listOfMovie: [],
            selectEditID: '',
    }

    getMovieList = () => {
        axios.get( API_URL_1 + "/movies" )
        .then( movie => {
            console.log(movie);
            this.setState({ listOfMovie: movie.data });
        });
    }

    componentWillMount() {
        this.getMovieList();
    }

    renderMovieList = () => {
        return this.state.listOfMovie.map( movie => 
        <MovieManageDetail 
            key={movie.id} 
            id={movie.id} 
            title={movie.title} 
            description={movie.description} 
            url={movie.url}
            fnDelete={() => this.onDeleteClick(movie.id)}
            fnEdit={() => this.onEditClick(movie.id)}
            selectedID = {this.state.selectEditID}
            fnUpdate = {(refs) => this.onUpdateClick(movie.id, refs)}
        />);
    }

    onUpdateClick = (id, refs) => {
        console.log(id, refs);
        axios.put(API_URL_1 + "/movies/" + id, {
            title: refs.titleUpdate.value,
            description: refs.desriptionUpdate.value,
            url: refs.urlUpdate.value
        })
        .then((Response) => {
            alert("Update Success!");
            console.log(Response);
            this.setState({ selectEditID: "" });
            this.getMovieList();
        })
        .catch((error) => {
            alert("Terjadi Error!");
            console.log(error);
        })
    }

    onEditClick(id) {
        this.setState({selectEditID : id});

    }

    onDaftarClick = () => {
        
        axios.post(API_URL_1 + '/movies', {
            title: this.refs.title.value,
            description: this.refs.description.value,
            url: this.refs.url.value,
        })
        .then((response) => {
            console.log(response);
            alert("Add Success!");

            this.getMovieList();
        })
        .catch((error) => {
            console.log(error);
        })
    }

    onDeleteClick(id) {
        axios.delete(API_URL_1 + "/movies/" + id)
        .then((Response) => {
            alert("Delete Success!");
            console.log(Response);

            this.getMovieList();
        })
        .catch((error) => {
            alert("Delete Error!");
            console.log(error);
        })
    }

    render() {
        console.log(this.state.selectEditID);
        return (
            <div className="container text-left">

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Url</th>
                            <th>Edit</th>
                            <th>Delete</th>
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

                    <input type="button" className="btn btn-success" value="Daftar" onClick={this.onDaftarClick} />
                </form>
            </div>
                
                
            
        );        
    }
}

export default connect(null,{onMovieRegister})(movieManage);