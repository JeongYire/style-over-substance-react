import React, { useRef, useState } from 'react';
import { BoxMode } from '../../../../types';

export default (params : {}) => {
  
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
    );
};
