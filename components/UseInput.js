import React, { useState } from 'react';

const UseInput = ({ type }) => {
    const [inputValue, setInputValue] = useState('');
    const handleValueChange = (e) => {
        setInputValue(e.target.value)
    }

    const input = (
        <input 
            type={type}
            onChange={handleValueChange}
        />
    );

    return [inputValue, input];

}

// return (
//     <>
//         <h1>
//             {text}
//         </h1>
//         <div className={inputStyles.input}>
//             <input onChange={setText} />
//         </div>
//     </>
// )

export default UseInput
