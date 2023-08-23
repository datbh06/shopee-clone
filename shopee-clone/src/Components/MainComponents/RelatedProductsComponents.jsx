import React, {useState, useCallback} from 'react';
import RelatedCard from '../GeneralComponents/RelatedCard.jsx';

const RelatedProductsComponents = () => {
    const data = {
        title: 'Nồi Áp Suất Đa Năng Mini Khong Kén Bếp Nồi Hầm Cao Cấp Nhỏ Gọn Mặt Nồi Chống Dính',
        image: 'https://media3.scdn.vn/img4/2022/10_22/Zo7ILkAxb5PxViSOjDif_simg_b5529c_250x250_maxb.jpg',
        price: '219.000đ',
        sold: '7',
        location: 'TP.HCM',
        rating: '5/5',
    };

    const [cards, setCards] = useState(Array(18).fill(data));

    const handleLoadMore = useCallback(() => {
        setCards((prevCards) => [...prevCards, ...Array(6).fill(data)]);
    }, [data]);

    return (<div className="flex flex-col lg:flex-row gap-16 rounded-xl">
        <div className="flex flex-col">
            <p className="text-md font-semibold mb-5">Ở đây có sản phẩm bạn thích</p>

            <div className="grid grid-cols-6 gap-5">
                {cards.map((cardData, index) => (<RelatedCard key={index} {...cardData} />))}
            </div>

            <div className="text-center">
                <button
                    onClick={handleLoadMore}
                    className="bg-white rounded px-4 py-2 mt-5 font-semibold text-md"
                    style={{width: 'calc(33.3333% - 1.25rem)'}}>
                    Xem thêm
                </button>
            </div>

        </div>
    </div>);
};

export default RelatedProductsComponents;
