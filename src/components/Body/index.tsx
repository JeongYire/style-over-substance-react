
import Title from './Title';
import React, { useState } from 'react';
import FormBox from './FormBox';

function App() {

    const [boxArray,SetBoxArray] = useState([<FormBox index={0}/>]);

    return (
        <div style={{backgroundColor:'red'}}>
            {
                boxArray.map(obj => {
                    return boxArray;
                })
            }
        </div>
    );
}


export default App;
