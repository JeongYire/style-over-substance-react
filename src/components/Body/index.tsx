
import Title from './Title';
import React, { useState } from 'react';
import FormBox from './FormBox';
<<<<<<< HEAD


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
>>>>>>> parent of 5267a98 (add)
        </div>
    );
}


export default App;
