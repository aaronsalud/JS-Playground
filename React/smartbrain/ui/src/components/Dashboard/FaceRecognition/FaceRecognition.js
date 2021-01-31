import React, { useState, useEffect, useRef } from 'react';
import { calculateFaceLocations } from '../../../actions';
import './FaceRecognition.css';

const FaceRecognition = ({ url, analysisResults }) => {

  const [faces, setFaces] = useState([]);
  const [faceBoxes, setFaceBoxes] = useState(null);
  const imgElement = useRef(null);

  useEffect(() => {
    if (Object.keys(analysisResults).length && imgElement.current)
      setFaces(calculateFaceLocations(analysisResults, imgElement.current));
    return () => setFaces([]);
  }, [imgElement, analysisResults]);

  useEffect(() => {
    if (faces.length) setFaceBoxes(renderFaceBoxes());
    return () => setFaceBoxes(null);
  }, [faces]);

  const renderFaceBoxes = () => {
    return faces.map(face => {
      return <div className='bounding-box' key={face.id} style={{ top: face.topRow, right: face.rightCol, bottom: face.bottomRow, left: face.leftCol }}></div>
    });
  };

  return (
    <div className='center ma'>
      <div className='absolute pt3 pb3'>
        <img ref={imgElement} id='inputimage' alt='' src={url} width='500px' height='auto' />
        {faceBoxes}
      </div>
    </div>
  );
}

export default FaceRecognition;