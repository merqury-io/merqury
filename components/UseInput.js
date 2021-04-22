import React, { useState } from 'react';

const useInput = (initalValue) => {

    const [inputValue, setInputValue] = useState('');

    // const handleValueChange = (e) => {
    //     setInputValue(e.target.value);
    //     if ( props.onChange ) {
    //         props.onChange(inputValue);
    //     }
    // }

    // return (
    //     <>
    //         <input 
    //             type={inputType}
    //             value={inputValue}
    //             onChange={handleValueChange}
    //         />
    //     </>
    // )

    return {
        inputValue,
        setInputValue,
        bind: {
            inputValue,
            onChange: (e) => {
                setInputValue(e.target.value)
            }
        }
    }

}

export default useInput
