import React, {Component} from 'react';


class albumDetail extends Component {
    render() {
        return (
            <div >
                <a href={this.props.url}>
                    <img src={this.props.img} />
                </a>
                <h3>{this.props.title}</h3>
                <br/>
            </div>
            
        );
    }
}

export default albumDetail