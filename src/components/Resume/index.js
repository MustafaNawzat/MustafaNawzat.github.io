import React from 'react';
import pdf from './Mustafa_Merie_Resume.pdf'

export default class Resume extends React.Component {
  
  render(){

    const divStyle = {
      position:'fixed',
      top: '0',
      left: '0',
      bottom: '0',
      right: '0',
      width: '100%',
      height:'100%',
      border:'none',
      margin:'0',
      padding:'0',
      overflow:'hidden',
      zIndex:'999999'
    };

    return (
        <>
          <iframe src={pdf} title="Mustafa_Merie_Resume.pdf" style={divStyle}></iframe>
        </>
      );
  }
}