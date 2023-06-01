import React, { useState } from 'react';
import Header from '../../styles/Header.module.css';

function App() {


    const [mode,SetMode] = useState<string>('idle');

    return (
      <div id={Header.mainHeader} >
        <h1>{mode}</h1>
      </div>
    );
}


export default App;
