import React, { useState } from 'react';
import inputStyles from '../styles/input.module.css';

const ChatBubble = () => {

    const [chatBubbleText, setChatBubbleText] = useState('Write your message here');

    const handleInputChange = (e) => {
        setChatBubbleText(e.target.value)
    }

    return (
        <>
            <div>
                <h1>{chatBubbleText}</h1>
            </div>
            <div className={inputStyles.input}>
                <input 
                    type="textarea" 
                    onChange={handleInputChange}
                />
            </div>
        </>
    )
}

export default ChatBubble;
