import React, { createRef, forwardRef, useRef, useState } from 'react';
import { BoxType, FormTool } from '../../types';
import Header from '../styles/Header.module.css';
import FormBox from './FormBox';
import FormHeader from './FormHeader';

function App() {

  const width = useRef(window.screen.width);
  const height = useRef(window.screen.height);

  const [boxArray,SetBoxArray] = useState<BoxType[]>([BoxType.basic]);

  return (
    <div id={'screen'} style={{width:width.current,minHeight:height.current}}>
      <FormHeader tool={
        {
            addForm : (type) => {
                console.log("addForm");
    
                if(type == BoxType.basic){
                    console.log("일반");
                    SetBoxArray((array) => [...array,BoxType.basic])
                }
                if(type == BoxType.select){
                    console.log("노일반");
                    SetBoxArray((array) => [...array,BoxType.select])
                }
            },
            deleteForm : () => {
                console.log("deleteForm");
            }
        }
      } />
      <div style={{backgroundColor:'red'}}>
            {
                boxArray.map((obj,index) => {
                    console.log("반복중" + index);
                    return <FormBox index={index} key={index} type={obj}/>;
                })
            }
     </div>
    </div> 
  );
}

export default App;
