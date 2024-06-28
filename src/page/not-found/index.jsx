import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const NotFound = memo(() => {
    return (
        <div className='h-dvh flex items-center justify-center'>
            <div className='text-center'>
                <h1 className='text-3xl uppercase'>not found</h1>
                <button>
                    <Link to='/'>go home</Link>
                </button>
            </div>
        </div>
    );
});

export default NotFound;

NotFound.displayName = 'NotFound';