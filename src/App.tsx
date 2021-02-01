import './app.css';
import * as React from 'react';
import Camera from './pages/camera/camera';

const App: React.FunctionComponent = () => {
  return (
    <div className='frame'>
      <div className='corner_topleft'></div>
      <div className='corner_topright'></div>
      <div className='corner_bottomleft'></div>
      <div className='corner_bottomright'></div>
      <Camera />
    </div>
  );
};

export default App;
