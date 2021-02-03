import React, { useState } from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ setImageUrl, getImageRecognitionResults }) => {

  const [image, setImage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setImageUrl(image);
    getImageRecognitionResults(image);
  };

  return (
    <div>
      <p className='f3'>
        {'This Magic Brain will detect faces in your pictures. Git it a try.'}
      </p>
      <div className='center'>
        <form onSubmit={onSubmit}>
          <div className='form center pa4 br3 shadow-5'>
            <input className='f4 pa2 w-70 center' type='url' value={image} onChange={(e) => setImage(e.target.value)} />
            <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' type="submit">Detect</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ImageLinkForm;