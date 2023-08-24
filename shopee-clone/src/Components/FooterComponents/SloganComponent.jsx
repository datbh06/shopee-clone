import React from 'react';

class SloganComponent extends React.Component {
    render() {
        return (<div className="bg-white flex flex-row justify-center items-center">
            <div className=" grid grid-cols-4 p-5 gap-10 mt-6">
                <a className="text-center" href="https://www.sendo.vn/huong-dan/ve-sendo">
                    <div className="flex flex-col justify-center items-center">
                        <img style={{width: '50%', height: '50%'}}
                             data-src="https://media3.scdn.vn/img4/2020/12_16/gJwXr6FFZKZCGKWaz4RB.png"
                             src="https://media3.scdn.vn/img4/2020/12_16/gJwXr6FFZKZCGKWaz4RB.png"
                             alt="Siêu nhiều hàng tốt"
                        />
                        <span className="text-xs font-semibold mb-1">Siêu nhiều hàng tốt</span>
                        <span className="text-xs text-[#6f787e]">Cần gì cũng có 26 ngành hàng & 10</span>
                        <span className="text-xs text-[#6f787e]">triệu sản phẩm</span>
                    </div>
                </a>
                <a className="text-center" href="https://www.sendo.vn/huong-dan/ve-sendo">
                    <div className="flex flex-col justify-center items-center ">
                        <img style={{width: '50%', height: '50%'}}
                             data-src="https://media3.scdn.vn/img4/2020/12_16/EfZWQVfV6nQzu2vMmnwC.png"
                             src="https://media3.scdn.vn/img4/2020/12_16/EfZWQVfV6nQzu2vMmnwC.png"
                             alt="Siêu yên tâm"/>

                        <span className="text-xs font-semibold mb-1">Siêu yên tâm</span>

                        <span className="text-xs text-[#6f787e]">Miễn phí đổi trả 48h</span>
                    </div>
                </a>
                <a className="text-center" href="https://www.sendo.vn/huong-dan/ve-sendo">
                    <div className="flex flex-col justify-center items-center ">

                        <img style={{width: '50%', height: '50%'}}
                             data-src="https://media3.scdn.vn/img4/2020/12_16/j5C6IQz7gIXPgjFJxmRz.png"
                             src="https://media3.scdn.vn/img4/2020/12_16/j5C6IQz7gIXPgjFJxmRz.png"
                             alt="Siêu tiện lợi"
                        />

                        <span className="text-xs font-semibold mb-1">Siêu tiện lợi</span>

                        <span className="text-xs text-[#6f787e]">Mang thế giới mua sắm của Sendo</span>

                        <span className="text-xs text-[#6f787e]">trong tầm tay bạn</span>
                    </div>
                </a>
                <a className="text-center" href="https://www.sendo.vn/huong-dan/ve-sendo">
                    <div className="flex flex-col justify-center items-center ">
                        <img style={{width: '50%', height: '50%'}}
                             data-src="https://media3.scdn.vn/img4/2020/12_16/7AJFQGQ5qvS7gGOz8P7a.png"
                             src="https://media3.scdn.vn/img4/2020/12_16/7AJFQGQ5qvS7gGOz8P7a.png"
                             alt="Siêu tiết kiệm"
                        />
                        <span className="text-xs font-semibold mb-1">Siêu tiết kiệm</span>
                        <span className="text-xs text-[#6f787e]">Giá hợp lý, vừa túi tiền. Luôn có nhiều</span>
                        <span className="text-xs text-[#6f787e]"> chương trình khuyến mãi</span>
                    </div>
                </a>
            </div>
        </div>);
    }
}

export default SloganComponent;
