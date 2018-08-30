import React, {Component} from 'react';

class movieManageDetail extends Component {


    render() {
        if (this.props.id != this.props.selectedID){

            return (
                <tr>
                    <td><img style={{width: "100px"}} src={this.props.url}/></td>
                    
                    <td>{this.props.id}</td>
                    <td>{this.props.title}</td>
                    <td>{this.props.description}</td>
                    <td>{this.props.url}</td>
        
                    <td>
                        <input type="button" className="btn btn-warning" value="Edit" onClick={() => this.props.fnEdit()}/>
                    </td>
                    <td>
                        <input type="button" className="btn btn-danger" value="Delete" onClick={() => this.props.fnDelete()} />
                    </td>
                </tr>
            );

        }

        else if (this.props.id == this.props.selectedID){
            
            return (
                <tr>
                    <td><img style={{width: "100px"}} src={this.props.url}/></td>
                    
                    <td><textarea ref="idUpdate" defaultValue={this.props.id}/></td>
                    <td><textarea ref="titleUpdate" defaultValue={this.props.title}/></td>
                    <td><textarea ref="desriptionUpdate" defaultValue={this.props.description}/></td>
                    <td><textarea ref="urlUpdate" defaultValue={this.props.url}/></td>
        
                    <td>
                        <input type="button" className="btn btn-success" value="Update" onClick={() => this.props.fnUpdate(this.refs)}/>
                    </td>
                    <td>
                        <input type="button" className="btn btn-danger" value="Delete" onClick={() => this.props.fnDelete()} />
                    </td>
                </tr>
            );

        }
        
    }
}

export default movieManageDetail;