import React from 'react';

const ResourcesComponent = () => {
    return (<div className="flex flex-row justify-center items-center p-2  mt-6 ">
        <div className="grid grid-cols-4 ">
            <div>
                <h3 className="text-xs font-semibold mb-4">VỀ CHÚNG TÔI</h3>
                <ul>
                    <li className="text-xs">Giới thiệu Sendo.vn</li>
                    <li className="text-xs">Giới thiệu SenMall</li>
                    <li className="text-xs">Quy chế hoạt động</li>
                    <li className="text-xs">Chính sách bảo mật</li>
                    <li className="text-xs">Giao hàng và Nhận hàng</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xs font-semibold mb-4">DÀNH CHO NGƯỜI MUA</h3>
                <ul>
                    <li className="text-xs">Giải quyết khiếu nại</li>
                    <li className="text-xs">Hướng dẫn mua hàng</li>
                    <li className="text-xs">Chính sách đổi trả</li>
                    <li className="text-xs">Chăm sóc khách hàng</li>
                    <li className="text-xs">Nạp tiền điện thoại</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xs font-semibold mb-4">DÀNH CHO NGƯỜI BÁN</h3>
                <ul>
                    <li className="text-xs">Quy định đối với người bán</li>
                    <li className="text-xs">Chính sách bán hàng</li>
                    <li className="text-xs">Hệ thống tiêu chí kiểm duyệt</li>
                    <li className="text-xs">Mở shop trên Sendo</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xs font-semibold mb-4">TẢI ỨNG DỤNG SENDO</h3>
                <ul>
                    <li className="text-xs">Mang thế giới mua sắm của Sendo</li>
                    <li className="text-xs">trong tầm tay bạn</li>
                    <div className="flex flex-row gap-2 mb-2 mt-4">
                        <li>
                            <a aria-label="app store" href="https://go.onelink.me/app/2a94415f">
                                <img
                                    style={{width: '8rem', height: '3rem'}}
                                    data-src="https://media3.scdn.vn/img4/2020/12_16/5lUTWdk3DXr8nlC9MDII.png"
                                    src="https://media3.scdn.vn/img4/2020/12_16/5lUTWdk3DXr8nlC9MDII.png"
                                    alt="app-store"
                                />
                            </a>
                        </li>
                        <li>
                            <a aria-label="google play" href="https://go.onelink.me/app/2a19ae85">
                                <img
                                    style={{width: '8rem', height: '3rem'}}
                                    data-src="https://media3.scdn.vn/img4/2021/10_26/0ZARLASzVrfL92924rzW.png"
                                    src="https://media3.scdn.vn/img4/2021/10_26/0ZARLASzVrfL92924rzW.png"
                                    alt="google-play"
                                />
                            </a>
                        </li>
                    </div>
                    <li>
                        <a aria-label="app gallery" href="https://appgallery.huawei.com/app/C101535313">
                            <img
                                style={{width: '8rem', height: '3rem'}}
                                data-src="https://media3.scdn.vn/img4/2021/03_19/AMV086JNpEbm4OGAvVng.png"
                                src="https://media3.scdn.vn/img4/2021/03_19/AMV086JNpEbm4OGAvVng.png"
                                alt="app-gallery"
                            />
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    </div>);
};

export default ResourcesComponent;
