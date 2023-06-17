import React, { useContext, useEffect, useRef, useState } from 'react';
import { BasicOptionAnswerType, BoxMode, BoxType } from '../../../types';
import BasicForm from './BasicForm';
import SelectForm from './SelectForm';
import { FormManagerToolContext } from '../../../context';

export default (params : { id : number, type : BoxType, index : number }) => {

    const [mode,SetMode] = useState<BoxMode>(BoxMode.edit);

    const tool = useContext(FormManagerToolContext);

    const completeEdit = useRef<() => void>(() => {})

    const changeMode = () => {
        mode == BoxMode.edit ? SetMode(BoxMode.idle) : SetMode(BoxMode.edit);
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
                    : <button onClick={() => {completeEdit.current(); changeMode();}}>완료</button>
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
                params.type == BoxType.basic ? <BasicForm index={params.index} completeEdit={completeEdit} mode={mode} /> : <SelectForm index={params.index} completeEdit={completeEdit} mode={mode} />
            }
        </div>
    )

 
};
