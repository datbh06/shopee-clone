import React from 'react';

const ReviewComponent = () => {
    return (<div className={`bg-white rounded-lg p-6 text-left shadow-xl sm:my-8 sm:w-full sm:h-fit`}>
        <div className="flex justify-between items-center flex-col">
            <img
                src="https://web-static.scdn.vn/sendo-communication-rating/ef5bd2e-web/media/rating-empty.f56ae9e22805ed6a864d1a540bea0947.svg"
                alt="Sản phẩm hiện chưa có đánh giá"/>
            <p className='text-sm font-semibold mb-2'>Sản phẩm chưa có đánh giá.</p>
            <p className="text-sm text-[#a2a2a2] font-normal">Chọn mua sản phẩm để là người đầu tiên đánh giá sản phẩm
                này.</p>
        </div>
    </div>);
};

export default ReviewComponent;