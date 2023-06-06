import React, { LegacyRef, Ref, forwardRef, useRef, useState } from 'react';
import { BoxMode } from '../../../../types';


const FormBody = {
    Answer : forwardRef((props,ref : LegacyRef<HTMLInputElement>)  => (
        <div>
            <span>답변</span>
            <input disabled ref={ref}/>
        </div>
    )),
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
    })
};

const FormChecker = {
   Tool : {
     
   }
}

const BasicForm = {
    ...FormBody,...FormBody
}

export default BasicForm;
