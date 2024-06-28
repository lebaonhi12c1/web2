import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';

const RootLayout = memo(() => {
    return (
        <>
            <div className='max-w-[992px] mx-auto'>
                <Outlet />
            </div>
        </>
    );
});

export default RootLayout;

RootLayout.displayName = 'RootLayout';