import React, { LegacyRef, useImperativeHandle, useState } from 'react';
import Header from '../../styles/Header.module.css';


const App = () => {

  const [mode,SetMode] = useState<string>();

  return (
    <div id={Header.mainHeader}>
      <span style={{display:'flex',alignItems:'center'}}>
        <select>
          <option>일반</option>
          <option>선택</option>
        </select>
        <h1>{'추가하기'}</h1>
        <h2 style={{marginLeft:5,marginRight:5}}>|</h2>
        <h1>{'선택 삭제하기'}</h1>
      </span>
    </div>
  );
  
}

export default App;
