import React, { useRef, useState } from 'react';
import { BoxMode, BoxType } from '../../../types';
import BasicForm from './BasicForm';
import SelectForm from './SelectForm';

export default (params : { index : number, type : BoxType }) => {

    const [mode,SetMode] = useState<BoxMode>(BoxMode.idle);
    const [type,SetType] = useState<BoxType>(BoxType.basic);

    const title = useRef<string>('제목');
    const titleInput = useRef<any>();
    const content = useRef<string>('설명');
    const contentInput = useRef<any>();

    const CompleteEdit = () => {
        title.current = (titleInput.current as HTMLInputElement).value;
        content.current = (contentInput.current as HTMLInputElement).value;
        SetMode(BoxMode.idle);
    }

    return (
        <div style={{border:'1px solid black'}}>
            <div>
                <span>현재 모드 : {mode == BoxMode.idle ? '일반' : '편집'}</span>
            </div>
            <div>
                {
                    mode == BoxMode.idle 
                    ? <button onClick={() => {
                        SetMode(BoxMode.edit);
                    }}>편집</button>
                    : <button onClick={() => CompleteEdit()}>완료</button>
                }
            </div>
            <span>유형</span>
            <select defaultValue={params.type}>
                <option value={BoxType.basic}>일반</option>
                <option value={BoxType.select}>선택</option>
            </select>
            <h1>제목</h1>
            {
                mode == BoxMode.idle 
                ? <h2>{title.current}</h2>
                : <input ref={titleInput} defaultValue={title.current} />
            }
            <h1>설명</h1>
            {
                mode == BoxMode.idle 
                ? <h2>{content.current}</h2>
                : <input ref={contentInput} defaultValue={content.current}/>
            }
            {
                params.type == BoxType.basic 
                ? <BasicForm />
                : <SelectForm />
            }
        </div>
    );
};
