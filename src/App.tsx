import React, { useRef, useState } from 'react';
import { Body,Header } from './components';

function App() {

  const width = useRef(window.screen.width);
  //const height = useRef(window.screen.height);

  return (
    <div id={'screen'} style={{width:width.current}}>
      <Header />
      <Body/>
    </div>
  );
}

export default App;
