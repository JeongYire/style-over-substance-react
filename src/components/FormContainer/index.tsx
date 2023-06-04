import React, { createRef, forwardRef, useCallback, useRef, useState } from 'react';
import { BoxType, FormBoxInfo, FormTool } from '../../types';
import Header from '../styles/Header.module.css';
import FormBox from './FormBox';
import FormHeader from './FormHeader';
import { FormToolContext } from '../../context';

function App() {

  const boxIndex = useRef<number>(0);
  const [boxArray,SetBoxArray] = useState<FormBoxInfo[]>([{id : 0, type : BoxType.basic}]);
  console.log(boxArray);

  const formTool = useCallback<() => FormTool>(() => {
    const value : FormTool = {
      addForm : (type) => {
        console.log("addForm");

        if(type == BoxType.basic){
            console.log("일반");
            const newBox : FormBoxInfo = { id : boxIndex.current +1, type : type } 
            boxIndex.current += 1;
            SetBoxArray((array) => [...array,newBox])
        }
        if(type == BoxType.select){
            console.log("노일반");
            const newBox : FormBoxInfo = { id : boxIndex.current +1, type : type } 
            boxIndex.current += 1;
            SetBoxArray((array) => [...array,newBox])
        }
    },
    deleteForm : () => {
        console.log("deleteForm");
    },
    changeForm : (id,changeType) => {
      console.log("changeForm");
      const targetBox : FormBoxInfo = boxArray.find( obj => obj.id == id ) as FormBoxInfo;
      targetBox.type = changeType;
      SetBoxArray((array) => [...array])
    }
    };

    return value;
},[boxArray.length]);

  return (
    <div id={'screen'}>
      <FormToolContext.Provider value={formTool()}>
        <FormHeader/>
        <div>
              {
                  boxArray.map((obj,index) => {
                      console.log("반복중" + index);
                      return <FormBox index={index+1} id={obj.id} key={index} type={obj.type}/>;
                  })
              }
      </div>
      </FormToolContext.Provider>
    </div> 
  );
}

export default App;
