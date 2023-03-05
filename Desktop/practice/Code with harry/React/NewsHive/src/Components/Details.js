import React, { Component } from 'react'

export class Details extends Component {
  render() {
    
    const{content}=this.props;
    return (
      <div className='container'>
        <div className="row">
            <div className="col-md-6">
                <p>{content}</p>
            </div>
        </div>
        
      </div>
    )
  }
}

export default Details
