import React, { forwardRef, useRef } from 'react';
import { Body,Header } from './components';
import { FormTool } from './types';

function App() {

  const width = useRef(window.screen.width);
  const height = useRef(window.screen.height);

  const formTool = useRef<FormTool>();

  return (
    <div id={'screen'} style={{width:width.current,minHeight:height.current}}>
      <Header formTool={formTool}/>
      <Body ref={formTool}/>
    </div> 
  );
}

export default App;
