<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useRef, useState } from 'react';
=======
import React, { forwardRef, useRef } from 'react';
>>>>>>> 5267a98488512f0f0b8b6b04371a4ffc7c7108f2
=======
import React, { useRef } from 'react';
>>>>>>> parent of 5267a98 (add)
=======
import React, { useRef } from 'react';
>>>>>>> parent of 5267a98 (add)
import { Body,Header } from './components';

function App() {

  const width = useRef(window.screen.width);
<<<<<<< HEAD
  //const height = useRef(window.screen.height);
=======
  const height = useRef(window.screen.height);
>>>>>>> parent of 5267a98 (add)

  return (
<<<<<<< HEAD
    <div id={'screen'} style={{width:width.current}}>
      <Header />
=======
    <div id={'screen'} style={{width:width.current,minHeight:height.current}}>
<<<<<<< HEAD
<<<<<<< HEAD
      <Header/>
>>>>>>> 5267a98488512f0f0b8b6b04371a4ffc7c7108f2
=======
      <Header />
>>>>>>> parent of 5267a98 (add)
=======
      <Header />
>>>>>>> parent of 5267a98 (add)
      <Body/>
    </div>
  );
}

export default App;
