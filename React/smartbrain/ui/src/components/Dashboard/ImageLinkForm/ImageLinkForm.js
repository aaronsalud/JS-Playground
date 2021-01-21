import React, { useState } from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ setImageUrl }) => {

  const [image, setImage] = useState('');

  const onSubmit = () => {
    setImageUrl(image);
  };

  return (
    <div>
      <p className='f3'>
        {'This Magic Brain will detect faces in your pictures. Git it a try.'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='tex' value={image} onChange={(e) => setImage(e.target.value)} />
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
            onClick={onSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;