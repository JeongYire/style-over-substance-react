import React, { forwardRef, useImperativeHandle, useState } from 'react';
import FormBox from './FormBox';
import { BoxType, FormTool } from '../../types';


function App(props : any,ref: React.Ref<FormTool | undefined>) {

    const [boxArray,SetBoxArray] = useState<BoxType[]>([BoxType.basic]);

    useImperativeHandle(ref, () => ({
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
    }));

    return (
        <div style={{backgroundColor:'red'}}>
            {
                boxArray.map((obj,index) => {
                    console.log("반복중" + index);
                    return <FormBox index={index} key={index} type={obj}/>;
                })
            }
        </div>
    );
}




export default forwardRef(App);
