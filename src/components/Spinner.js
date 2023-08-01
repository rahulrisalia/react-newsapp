import React, { Component } from 'react';
import loading from './loading.gif';
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
            <img src={loading} alt="..."  width="30rem" className='mt-5'/>
      </div>
    )
  }
}

export default Spinner
