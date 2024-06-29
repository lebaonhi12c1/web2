import React, { memo } from 'react';
import HighlightText from '@/components/hightlight-text';
const CardContentHightlight = memo(({ children, value, hightlight }) => {
    return (
        <>
            <HighlightText text={value} hightlight={hightlight} />
            {children}
        </>
    );
});

export default CardContentHightlight;

CardContentHightlight.displayName = 'CardContentHightlight';