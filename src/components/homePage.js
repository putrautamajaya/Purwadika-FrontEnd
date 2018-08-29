import React, { Component } from 'react';
import axios from 'axios';
import { API_URL_1 } from '../supports/API-url/apiurl';
import Carousels from '../components/Carousel';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';

class homePage extends Component {
    onEditClick = () => {
        //axios.put gunany untuk ngedit
        axios.put(API_URL_1 + "/users/MUthawY", {
            username: "bobi",
            email: "bobi@gmail.com",
            password: "123456"
        })
        .then((Response) => {
            alert("Edit Success!");
            console.log(Response);
        })
        .catch((error) => {
            alert("Terjadi Error!");
            console.log(error);
        })
    }

    onDeleteClick = () => {
        axios.delete(API_URL_1 + "/users/Wo3GMap")
        .then((Response) => {
            alert("Delete Success!");
            console.log(Response);
        })
        .catch((error) => {
            alert("Delete Error!");
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <Carousels 
                legend1={"BDO Image 1"}
                image1 = {image1}
                legend2={"BDO Image 2"}
                image2 = {image2}
                legend3={"BDO Image 3"}
                image3 = {image3}
                munculText = {true}
                textnya = {"hello Bro Coy"}
                />
                <input type="button" className="btn btn-danger" value="Delete" onClick={this.onDeleteClick}/>
                <input type="button" className="btn btn-danger" value="Edit" onClick={this.onEditClick}/>
            </div>
        );
    }
}

export default homePage;