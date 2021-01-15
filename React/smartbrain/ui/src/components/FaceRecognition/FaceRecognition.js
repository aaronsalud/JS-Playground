import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {

  const renderBoxes = () => {
    return boxes.map(box => {
      return <div className='bounding-box' key={box.id} style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
    });
  };

  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto' />
        {renderBoxes()}
      </div>
    </div>
  );
}

export default FaceRecognition;