import React, { createContext, useState } from 'react';

// Tạo một Context
export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
    const [state, setState] = useState({
        video: 'https://www.youtube.com/embed/u_4ZhHpReuE?list=PLO4xYQBA1oxVDRzXzjLUPhnlEC5JMx628',
        title: 'Thuyết trình về môn Bánh canh Bến Có',
        story: `- Là người thôn Nguyệt Lãng, huyện Vĩnh Trị (nay thuộc xã Bình Phú, huyện Càng Long, tỉnh Trà Vinh)
                    - Tên thật là Thạch Duyên (Duồn), tục danh Tà Duồn, gốc người Khmer, vì có công nên được Nhà Nguyễn ban cho tên họ là Nguyễn Văn Tồn
                    - Theo Đại Nam liệt truyện, Thống chế Nguyễn Văn Tồn có một người con Yên Vy.. `
    });

    return (
        <ProductContext.Provider value={{ state, setState }}>
            {children}
        </ProductContext.Provider>
    );
};
