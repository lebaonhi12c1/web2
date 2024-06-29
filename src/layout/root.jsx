import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';

const RootLayout = memo(() => {
    return (
        <>
            <div className='max-w-[992px] mx-auto p-4 lg:p-0'>
                <Outlet />
            </div>
        </>
    );
});

export default RootLayout;

RootLayout.displayName = 'RootLayout';