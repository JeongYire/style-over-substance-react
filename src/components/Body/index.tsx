<<<<<<< HEAD
import React from 'react';
import Title from './Title';
=======
import React, { useState } from 'react';
import FormBox from './FormBox';
import { BoxType } from '../../types';
>>>>>>> 5267a98488512f0f0b8b6b04371a4ffc7c7108f2


function App() {

    const [boxArray,SetBoxArray] = useState<BoxType[]>([BoxType.basic]);


    return (
        <div style={{backgroundColor:'red'}}>
<<<<<<< HEAD
            <Title />
=======
            {
                boxArray.map((obj,index) => {
                    console.log("반복중" + index);
                    return <FormBox index={index} key={index} type={obj}/>;
                })
            }
>>>>>>> 5267a98488512f0f0b8b6b04371a4ffc7c7108f2
        </div>
    );
}


export default App;
