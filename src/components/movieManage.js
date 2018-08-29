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
            <td><img style={{width: "100px"}} src={movie.url}/></td>
            <td>{movie.id}</td>
            <td>{movie.title}</td>
            <td>{movie.description}</td>
            <td>{movie.url}</td>
            <td>
                <input type="button" className="btn btn-warning" value="Edit" onClick={() => this.onEditClick(movie.id)}/>
            </td>
            <td>
                <input type="button" className="btn btn-danger" value="Delete" onClick={() => this.onDeleteClick(movie.id)}/>
            </td>
        </tr>
        );
    }

    onDaftarClick = () => {
        axios.post(API_URL_1 + '/movies', {
            title: this.refs.title.value,
            description: this.refs.description.value,
            url: this.refs.url.value,
        })
        .then((response) => {
            console.log(response);
            axios.get( API_URL_1 + "/movies" )
            .then( movie => {
                console.log(movie);
                this.setState({ listOfMovie: movie.data });
            });
            
        })
        .catch((error) => {
            console.log(error);
        })
    }

    onEditClick(id) {
        //axios.put gunany untuk ngedit
        axios.put(API_URL_1 + "/movies/" + id, {
            title: "spongebob",
            description: "spons kuning",
            url: ""
        })
        .then((Response) => {
            alert("Edit Success!");
            console.log(Response);

            axios.get( API_URL_1 + "/movies" )
            .then( movie => {
                console.log(movie);
                this.setState({ listOfMovie: movie.data });
            });
            
        })
        .catch((error) => {
            alert("Terjadi Error!");
            console.log(error);
        })
    }

    onDeleteClick(id) {
        axios.delete(API_URL_1 + "/movies/" + id)
        .then((Response) => {
            alert("Delete Success!");
            console.log(Response);

            axios.get( API_URL_1 + "/movies" )
            .then( movie => {
                console.log(movie);
                this.setState({ listOfMovie: movie.data });
            });
        })
        .catch((error) => {
            alert("Delete Error!");
            console.log(error);
        })
    }

    render() {
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