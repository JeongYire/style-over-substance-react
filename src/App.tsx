import React, { useRef } from 'react';
import FormContainer from './components/FormContainer';

function App() {

  const width = useRef(window.screen.width);
  const height = useRef(window.screen.height);

  return (
    <div id={'screen'} style={{width:width.current,minHeight:height.current}}>
      <FormContainer />
    </div> 
  );
}

export default App;
