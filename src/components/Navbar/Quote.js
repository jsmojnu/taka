import React from 'react';
import Typewriter from 'typewriter-effect';

const Quote = () => {
    return (
        <div style={{ textAlign: 'center', margin: '10px' }}>
            <Typewriter
                options={{
                    strings: ['** পয়সাই খমোতা **'],  
                    autoStart: false,
                    loop: true,
                }}
            />
        </div>
    );
};

export default Quote;