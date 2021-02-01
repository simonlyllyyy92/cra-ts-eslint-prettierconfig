import * as React from 'react';
import './camera.css';

//Map
import Map from '../maps/map';

const Camera: React.FunctionComponent = () => {
  return (
    <div className='camera'>
      <Map />
    </div>
  );
};
export default Camera;
