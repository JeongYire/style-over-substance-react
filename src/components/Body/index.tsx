import React, { useState } from 'react';
import FormBox from './FormBox';
import { BoxType } from '../../types';


function App() {

    const [boxArray,SetBoxArray] = useState<BoxType[]>([BoxType.basic]);


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


export default App;
