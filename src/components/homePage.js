import React, { Component } from 'react';
import Carousels from '../components/Carousel';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';

class homePage extends Component {
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
            </div>
        );
    }
}

export default homePage;