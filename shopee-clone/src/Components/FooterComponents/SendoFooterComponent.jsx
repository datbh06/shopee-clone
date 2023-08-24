import React from 'react';

const SendoFooterComponent = () => {
    return (<div className="flex items-center justify-center text-white text-xs p-6 bg-[#27343e] ">
        <div className="grid grid-cols-2 gap-23">
            <div className="mr-10">
                <p className="font-semibold mb-3">Công ty Cổ phần Công nghệ Sen Đỏ, thành viên của Tập đoàn FPT</p>
                <p className="mb-3">Số ĐKKD: 0312776486 - Ngày cấp: 13/05/2014, được sửa đổi lần thứ 20, ngày
                    26/04/2022.</p>
                <p className="mb-3">Cơ quan cấp: Sở Kế hoạch và Đầu tư TPHCM.</p>
                <p className="">Địa chỉ: Tầng 5, Tòa nhà A, Vườn Ươm Doanh Nghiệp, Lô D.01, Đường Tân Thuận, Khu chế
                    xuất Tân</p>
                <p className="mb-3"> Thuận, Phường Tân Thuận Đông, Quận 7, Thành phố Hồ Chí Minh, Việt Nam.</p>
                <p className="mb-3">Email: lienhe@sendo.vn</p>
                <div className="flex flex-column gap-5 mt-3 mb-3">
                    <a href="http://online.gov.vn/Home/WebDetails/21391"><img
                        data-src="https://media3.scdn.vn/img4/2020/12_16/XhpGDnvWqrlKeHLst3aS.png"
                        src="https://media3.scdn.vn/img4/2020/12_16/XhpGDnvWqrlKeHLst3aS.png" alt="Bộ Công Thương"
                        style={{width: '6rem', height: '2rem'}}/></a>
                    <a href="https://help.sendo.vn/hc/vi/articles/115001260091-Làm-thế-nào-để-trả-hàng"><img
                        data-src="https://media3.scdn.vn/img4/2020/12_16/h6lEMGIAt4Uapd0Mls34.png"
                        src="https://media3.scdn.vn/img4/2020/12_16/h6lEMGIAt4Uapd0Mls34.png"
                        alt="Bộ Công Thương - Nói không với hàng giả"
                        style={{width: '6rem', height: '2rem'}}/></a>
                </div>
            </div>
            <div className="ml-20">
                <p className="font-semibold mb-3">Đăng ký nhận bản tin ưu đãi khủng từ Sendo</p>
                <div className="flex flex-row gap-2 ">
                    <input type="email" placeholder="Email của bạn là"
                           className="w-2/3 h-9 px-3 rounded-b rounded-t outline-none"/>
                    <button
                        className="bg-[#ee2624] text-white font-semibold
                         py-3 px-25 rounded-b rounded-t h-9 w-1/5 hover:bg-[#f1514f]">Đăng ký
                    </button>
                </div>
            </div>
        </div>
    </div>);
};



export default SendoFooterComponent;