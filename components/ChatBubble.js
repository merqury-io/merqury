import React, { useState } from 'react';
import useInputStyles from '../styles/useInput.module.css';

const ChatBubble = () => {

    const [chatBubbleText, setChatBubbleText] = useState('');

    const handleInputChange = (e) => {
        setChatBubbleText(e.target.value)
    }

    return (
        <>
            <div>
                <h1>{chatBubbleText}</h1>
            </div>
            <div className={useInputStyles.input}>
                <input 
                    type="text" 
                    onChange={handleInputChange}
                />
            </div>
        </>
    )
}

export default ChatBubble





// import React from 'react';
// import UseInput from './UseInput';

// import inputStyles from '../styles/useInput.module.css';

// const ChatBubble = () => {

//     const [chatBubbleText, setChatBubbleText] = UseInput({
//         type: 'text'
//     });

//     return (
//         <>
//             {setChatBubbleText => {chatBubbleText} } 
//         </>
//     )
// };

// export default ChatBubble;
