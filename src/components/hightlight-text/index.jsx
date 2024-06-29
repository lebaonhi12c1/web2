import React, { useState } from 'react';

const HighlightText = ({ text, hightlight }) => {
    const [message, setMessage] = useState('');

    const handleHighlightClick = () => {
        setMessage('Bạn đã click vào đoạn text được highlight!');
    };

    const parts = text.split(hightlight);

    return (
        <div>
            {parts.map((part, index) => (
                <span key={index}>
                    {part}
                    {index < parts.length - 1 && (
                        <span
                            style={{ backgroundColor: 'yellow', cursor: 'pointer' }}
                            onClick={handleHighlightClick}
                        >
                            {hightlight}
                        </span>
                    )}
                </span>
            ))}
            {message && <div style={{ marginTop: '10px', color: 'green' }}>{message}</div>}
        </div>
    );
};

export default HighlightText;
