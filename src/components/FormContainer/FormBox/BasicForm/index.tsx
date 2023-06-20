import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { BasicOptionAnswerType, BoxMode } from '../../../../types';

export default (params : { mode : BoxMode ,index : number, completeEdit : MutableRefObject<() => void> }) => {

    const title = useRef<string>('제목을 적어주세요.');
    const titleInput = useRef<any>();
    const content = useRef<string>('설명을 적어주세요.');
    const contentInput = useRef<any>();
    const required = useRef<boolean>(false);
    const requiredInput = useRef<any>();

    const [answerType,setAnswerType] = useState<BasicOptionAnswerType>(BasicOptionAnswerType.short);

    const radioEvent = (value : string) => {
        const type = value as BasicOptionAnswerType;
        setAnswerType(type);
    }

    const CompleteEdit = () => {
        console.log('BASIC FORM COMPLETE EDIT3');
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
                    <span>답변 유형</span>
                    <div>
                        <span>단답형</span>
                        <input checked={answerType == BasicOptionAnswerType.short} type="radio" name='answerType' value={BasicOptionAnswerType.short} onChange={(obj) => {radioEvent(obj.currentTarget.value)}}/>
                    </div>
                    <div>
                        <span>장문형</span>
                        <input checked={answerType == BasicOptionAnswerType.long} type="radio" name='answerType'  value={BasicOptionAnswerType.long} onChange={(obj) => {radioEvent(obj.currentTarget.value)}}/>
                    </div>
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
                    <span>답변</span>
                    {
                    answerType == BasicOptionAnswerType.short ? <input disabled/> : <textarea disabled/>
                    }
                </div>
            }
        </>
    );
};




