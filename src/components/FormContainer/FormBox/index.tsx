import React, { useContext, useRef, useState } from 'react';
import { BoxMode, BoxType } from '../../../types';
import BasicForm from './BasicForm';
import SelectForm from './SelectForm';
import { FormManagerToolContext } from '../../../context';

export default (params : { id : number, type : BoxType, index : number }) => {

    const [mode,SetMode] = useState<BoxMode>(BoxMode.edit);
    
    const tool = useContext(FormManagerToolContext);

    const title = useRef<string>('제목을 적어주세요.');
    const titleInput = useRef<any>();
    const content = useRef<string>('설명을 적어주세요.');
    const contentInput = useRef<any>();
    const required = useRef<boolean>(false);
    const requiredInput = useRef<any>();

    //주석3
    const CompleteEdit = () => {
        title.current = (titleInput.current as HTMLInputElement).value;
        content.current = (contentInput.current as HTMLInputElement).value;
        required.current = (requiredInput.current as HTMLInputElement).checked;
        SetMode(BoxMode.idle);
    }

    return (
        <div style={{border:'1px solid black',borderLeft:0,borderRight:0,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <div>
                <span>현재 모드 : {mode == BoxMode.idle ? '미리보기' : '편집'}</span>
                {
                    mode == BoxMode.idle 
                    ? <button onClick={() => {
                        SetMode(BoxMode.edit);
                    }}>편집</button>
                    : <button onClick={() => CompleteEdit()}>완료</button>
                }
            </div>
            {
                mode == BoxMode.edit ?
                <div>
                    <span>유형</span>
                    <select defaultValue={params.type} onChange={() => {
                        console.log('onchange');
                        tool.changeForm(params.id,params.type == BoxType.select ? BoxType.basic : BoxType.select);
                    }}>
                        <option value={BoxType.basic}>일반</option>
                        <option value={BoxType.select}>선택</option>
                    </select>
                </div>
                 : null
            }
            {
                mode == BoxMode.edit ?
                <div>
                    <span>필수 문항</span>
                    <input type='checkbox' ref={requiredInput} defaultChecked={required.current}/>
                </div>
                 : null
            }
            {
                params.type == BoxType.basic ?
                <BasicForm.Option /> : 
                params.type == BoxType.select ? 
                <SelectForm.Option /> :
                null
            }
            {
                mode == BoxMode.idle 
                ? required.current == true ? <h2>* {params.index}. {title.current}</h2> : <h2>{params.index}. {title.current}</h2>
                : <input ref={titleInput} defaultValue={title.current} placeholder='제목을 적어주세요.'/>
            }
            {
                mode == BoxMode.idle 
                ? <h2>{content.current}</h2>
                : <input ref={contentInput} defaultValue={content.current} placeholder='설명을 적어주세요.'/>
            }
            {
                mode == BoxMode.edit ? null :
                params.type == BoxType.basic 
                ? <BasicForm.Answer/>
                : <SelectForm.Answer/>
            }
        </div>
    );
};
