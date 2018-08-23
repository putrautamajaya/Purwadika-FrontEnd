import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';



class Carousels extends Component {

    renderText = () => {
        if(this.props.munculText) {
            return(<h1>{this.props.textnya}</h1>);
        }
    }

    render() {
        return (
            <div>
                <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false} className='container kucing'>
                    
                    <div className="merdeka">
                        <img src= {this.props.image1} />
                        <p className="legend">{this.props.legend1}</p>
                    </div>

                    <div className="merdeka">
                        <img src= {this.props.image2} />
                        <p className="legend">{this.props.legend2}</p>
                    </div>

                    <div className="merdeka">
                        <img src= {this.props.image3} />
                        <p className="legend">{this.props.legend3}</p>
                    </div>

                </Carousel>
                
                {this.renderText()}
            </div>
        );
    }
}

export default Carousels;