import { memo } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderRoot from "@/components/layouts/HeaderRoot.jsx";
const RootLayout = memo(() => {
    return (
        <>
            <HeaderRoot/>
            <div className='max-w-[992px] mx-auto p-4 lg:px-0 lg:py-5'>
                <Outlet />
            </div>
        </>
    );
});

export default RootLayout;

RootLayout.displayName = 'RootLayout';