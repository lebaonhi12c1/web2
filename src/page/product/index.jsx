import React, { memo, useContext, useEffect, useState } from "react";
import CardContent from "@/components/card-content";
import CardContentText from "@/components/card-content/card-content-text";
import CardContentGridImage from "@/components/card-content/card-content-image";
import CardContentHightlight from "@/components/card-content/card-content-hightlight";
import { Link, useParams } from "react-router-dom";
import cn from "@/helper/cn";
import {products} from "@/datas/product";
const Product = memo(() => {
    const [product, setProduct] = useState(null);
    const [isComent, setIsComemt] = useState(false);
    const [feedbacks, setFeedbacks] = useState([]);
    const params = useParams()
    // ${import.meta.env.VITE_BACKEND_URL}/api/feedback
    const handleComemt = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        try {
            const response = await fetch(
                `http://localhost:3001/api/feedback`,
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                    body: JSON.stringify({
                        foodName: product?.title,
                        comment: formData.get("comment"),
                        overview: "none",
                        making: "none",
                        enjoy: "none",
                        restaurant: "none",
                        productId: product?.id,
                    }),
                }
            );
            const data = await response.json();
            if(response.ok){
                alert("Bình luận đã được gửi");
                getListFeedBack();
                return
            }
            alert(data?.message);
        } catch (error) {
            console.error(error);
        }
    };

    const handleOpenComment = () => {
        if (!JSON.parse(localStorage.getItem("user"))) {
            alert('Bạn phải đăng nhập để đánh giá!');
            return
        }
        setIsComemt(!isComent);
    };


    const getListFeedBack = async () => {
        const response = await fetch(
            `http://localhost:3001/api/feedback`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await response.json();
        setFeedbacks(data.data);
    }

    const filterFeedBack = () => {
        return feedbacks.filter((item) => item.productId == product?.id);
    }

    useEffect(() => {
        setProduct(products.find((item) => item.id == params.id));
        getListFeedBack();
    }, [])


    return (
        <div className="flex flex-col gap-4 pb-4">
            <iframe
                className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                src={product?.video}
                title="Thuyết trình về món Bánh canh Bến Có"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen=""
            ></iframe>
            <h2 className="text-3xl text-center pb-4 border-b border-slate-800">
                {product?.title}
            </h2>
            <div className="flex flex-col gap-4">
                {product?.contents?.map((content, index) => (
                    <CardContent title={content.title} key={index}>
                        {content.data?.map((item, key) => (
                            <div key={key}>
                                {item.type == "text" && (
                                    <CardContentText value={item.value} />
                                )}
                                {item.type == "hightlight" && (
                                    <CardContentHightlight
                                        value={item.value}
                                        hightlight={item.hightlight}
                                    />
                                )}
                                {item.type == "grid-image" && (
                                    <CardContentGridImage value={item.value} />
                                )}
                            </div>
                        ))}
                    </CardContent>
                ))}
                <CardContent title="Thẻ">
                    <div className="flex items-center gap-2 flex-wrap">
                        {product?.tags?.map((tag, index) => (
                            <button
                                key={index}
                                className="py-2 px-4 bg-slate-200 hover:bg-slate-300"
                            >
                                <Link to={tag.link}>{tag.title}</Link>
                            </button>
                        ))}
                    </div>
                </CardContent>
                <CardContent title="Đánh giá và nhận xét">
                    <button
                        className={cn(
                            " text-white w-fit m-auto px-4 rounded py-2",
                            {
                                "bg-green-400 hover:bg-green-500": !isComent,
                                "bg-red-400 hover:bg-red-500": isComent,
                            }
                        )}
                        onClick={handleOpenComment}
                    >
                        {
                            isComent ? "Hủy đánh giá" : "Viết dánh giá"
                        }
                    </button>
                    {isComent && (
                        <form onSubmit={handleComemt}>
                            <label
                                className="block text-gray-700 text-sm font-medium mb-2"
                                htmlFor="comment"
                            >
                                Bình luận
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="comment"
                                name="comment"
                                rows="5"
                                placeholder="Nhập đanh giá..."
                                required
                            ></textarea>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                                type="submit"
                            >
                                Gửi
                            </button>
                        </form>
                    )}
                </CardContent>
                <CardContent title="Danh sách đánh giá">
                    <div className="flex flex-col gap-4">
                        {filterFeedBack(feedbacks).map((item, index) => (
                            <div key={index} className="flex items-start gap-2">
                                <img src={item.createdBy.avatar} alt="user-avatar" className="rounded-full w-[50px] h-[50px] object-cover"></img>
                                <div className="flex flex-col gap-2 p-2 bg-slate-200 rounded-lg">
                                    <div className="font-medium">{item.createdBy.fullname}</div>
                                    <div className="text-slate-600 text-[14px]">
                                        {item.comment}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {filterFeedBack(feedbacks).length == 0 && (
                            <div className="text-center">Chưa có đánh giá</div>
                        )}
                    </div>
                </CardContent>
            </div>
        </div>
    );
});

export default Product;

Product.displayName = "Product";
