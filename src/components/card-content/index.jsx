import React, { memo } from 'react';

const CardContent = memo(({ children, title }) => {
    return (
        <div className='d-flex flex-col gap-4 px-4'>
            <h4 className='text-lg font-medium'>{title}</h4>
            {children}
        </div>
    );
});

export default CardContent;

CardContent.displayName = 'CardContent';