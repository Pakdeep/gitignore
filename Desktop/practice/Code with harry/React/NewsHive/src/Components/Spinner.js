import React, { Component } from 'react'
import spinner from './spinner.gif'

export class Spinner extends Component {
  render() {
    return (
      <div>
      <img src={spinner} alt="spinner" width={"100px"} />
      </div>
    )
  }
}

export default Spinner
