import React, { memo } from "react";
import CardContent from "@/components/card-content";
const Product = memo(() => {
    return (
        <div className="flex flex-col gap-4 bg-white pb-4">
            <iframe
                className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                src="https://www.youtube.com/embed/u_4ZhHpReuE?list=PLO4xYQBA1oxVDRzXzjLUPhnlEC5JMx628"
                title="Thuyết trình về món Bánh canh Bến Có"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen=""
            ></iframe>
            <h2 className="text-3xl text-center pb-4 border-b border-slate-800">
                Thuyết trình về món Bánh canh Bến Có
            </h2>
            <CardContent title="Giới thiệu">

            </CardContent>
        </div>
    );
});

export default Product;

Product.displayName = "Product";
