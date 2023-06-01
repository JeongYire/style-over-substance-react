<<<<<<< HEAD
import React, { useRef, useState } from 'react';
=======
import React, { forwardRef, useRef } from 'react';
>>>>>>> 5267a98488512f0f0b8b6b04371a4ffc7c7108f2
import { Body,Header } from './components';

function App() {

  const width = useRef(window.screen.width);
  //const height = useRef(window.screen.height);



  return (
<<<<<<< HEAD
    <div id={'screen'} style={{width:width.current}}>
      <Header />
=======
    <div id={'screen'} style={{width:width.current,minHeight:height.current}}>
      <Header/>
>>>>>>> 5267a98488512f0f0b8b6b04371a4ffc7c7108f2
      <Body/>
    </div>
  );
}

export default App;
