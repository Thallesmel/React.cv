import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';

const Load = () => {
    const now = 60;
  return (
        <ProgressBar now={now} label={`${now}%`} visuallyHidden/>     
  )
}
export default Load