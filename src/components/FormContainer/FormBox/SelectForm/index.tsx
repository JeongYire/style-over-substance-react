import React, { LegacyRef, MutableRefObject, forwardRef, useEffect, useRef, useState } from 'react';
import { BoxMode } from '../../../../types';


export default (params : { mode : BoxMode ,index : number, completeEdit : MutableRefObject<() => void> }) => {

    const title = useRef<string>('제목을 적어주세요.');
    const titleInput = useRef<any>();
    const content = useRef<string>('설명을 적어주세요.');
    const contentInput = useRef<any>();
    const required = useRef<boolean>(false);
    const requiredInput = useRef<any>();

    const [choiceArray,setChoiceArray] = useState<Array<{ value : string , selected : boolean }>>(
        [{selected : false, value : '선택지1'},{selected : false, value : '선택지2'}]
    );
    
    const selectChoice = (value : { value : string , selected : boolean } ) => {
        value.selected = !value.selected;

        setChoiceArray((array)=>{
            return [...array]
        })
    }

    const CompleteEdit = () => {
        console.log('SELECT FORM COMPLETE EDIT');
        title.current = (titleInput.current as HTMLInputElement).value;
        content.current = (contentInput.current as HTMLInputElement).value;
        required.current = (requiredInput.current as HTMLInputElement).checked;
    }

    useEffect(() => {
        params.completeEdit.current = CompleteEdit;
    },[])

    return (
        <>
            {
                params.mode == BoxMode.edit ?
                <div>
                    <span>필수 문항</span>
                    <input type='checkbox' ref={requiredInput} defaultChecked={required.current}/>
                </div>
                : null
            }
            {
                params.mode == BoxMode.edit ?
                <div>
                    <span>복수선택 여부</span>
                    <input type='checkbox' ref={requiredInput} defaultChecked={required.current}/>
                </div>
                : null
            }
            {
                params.mode == BoxMode.idle 
                ? required.current == true ? <h2>* {params.index}. {title.current}</h2> : <h2>{params.index}. {title.current}</h2>
                : <input ref={titleInput} defaultValue={title.current} placeholder='제목을 적어주세요.'/>
            }
            {
                params.mode == BoxMode.idle 
                ? <h2>{content.current}</h2>
                : <input ref={contentInput} defaultValue={content.current} placeholder='설명을 적어주세요.'/>
            }
            {
                <div>
                    <div style={{height:30,display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <span>답변</span>
                        &nbsp;
                        <span style={{color:'blue'}}>추가</span>
                        <span>|</span>
                        <span style={{color:'red'}}>삭제</span>
                    </div>
                    {
                        choiceArray.map((obj,index) => {
                            return <div key={`choice_${index}`} onClick={() => selectChoice(obj)} style={{backgroundColor:obj.selected ? 'red' : 'white'}}><input type='checkbox' /><input defaultValue={obj.value}/></div>
                        })
                    }
                </div>
            }
        </>
    );
};


