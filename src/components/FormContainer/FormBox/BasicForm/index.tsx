import React, { LegacyRef, MutableRefObject, Ref, forwardRef, useEffect, useReducer, useRef, useState } from 'react';
import { BasicOptionAnswerType, BoxMode, BoxType } from '../../../../types';

const FormBody = {
    Answer : (props : {formParameter : BasicOptionAnswerType}) => {

        return (
        <div>
            <span>답변</span>
            {
                props.formParameter == BasicOptionAnswerType.short ? <input disabled/> : <textarea disabled/>
            }
        </div>
        )
    },
    Option : forwardRef((params,ref : LegacyRef<HTMLInputElement>) => {

        const defaultValue = useRef<BasicOptionAnswerType>(BasicOptionAnswerType.default);
       
        return (
            <div>
                <span>답변 유형</span>
                <div>
                    <span>단답형</span>
                    <input type="radio" name='answerType' value={BasicOptionAnswerType.short} ref={ref} defaultChecked={defaultValue.current == BasicOptionAnswerType.short}/>
                </div>
                <div>
                    <span>장문형</span>
                    <input type="radio" name='answerType'  value={BasicOptionAnswerType.long}   defaultChecked={defaultValue.current == BasicOptionAnswerType.long}/>
                </div>
            </div>
        )
    })
};




export default {...FormBody};
