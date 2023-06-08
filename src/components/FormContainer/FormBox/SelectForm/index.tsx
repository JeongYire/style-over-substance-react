import React, { LegacyRef, forwardRef, useRef, useState } from 'react';
import { BoxMode } from '../../../../types';


const FormBody = {
    Option : forwardRef((props,ref : LegacyRef<HTMLInputElement>) => {

        return (
            <div>
                <span>답변 유형</span>
                <div>
                    <span>단답형</span>
                    <input type="radio" name='answerType'/>
                </div>
                <div>
                    <span>장문형</span>
                    <input type="radio" name='answerType'/>
                </div>
            </div>
        )
    }),
    Answer : forwardRef((props,ref : LegacyRef<HTMLInputElement>) => {

        return (
            <div>
                <span>답변</span>
                <div>
                    <input type='checkbox' />돈가스
                </div>
                <div>
                    <input type='checkbox' />치킨
                </div>
                <div>
                    <input type='checkbox' />햄버거
                </div>
            </div>
        )
    })
};




export default FormBody;
