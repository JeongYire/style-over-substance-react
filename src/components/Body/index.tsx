<<<<<<< HEAD
import React from 'react';
import Title from './Title';
=======
import React, { useState } from 'react';
import FormBox from './FormBox';
<<<<<<< HEAD
import { BoxType } from '../../types';
>>>>>>> 5267a98488512f0f0b8b6b04371a4ffc7c7108f2
=======
>>>>>>> parent of 5267a98 (add)


function App() {

    const [boxArray,SetBoxArray] = useState([<FormBox index={0}/>]);

    return (
        <div style={{backgroundColor:'red'}}>
<<<<<<< HEAD
            <Title />
=======
            {
                boxArray.map(obj => {
                    return boxArray;
                })
            }
>>>>>>> 5267a98488512f0f0b8b6b04371a4ffc7c7108f2
        </div>
    );
}


export default App;
