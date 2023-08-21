const TopNavbarComponent = () => {
    return (<div className="bg-[#455261] w-full">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-8 items-center justify-between">
                    <div className="flex items-center">
                        <a href="#" className="text-white px-2 py-1 rounded-md text-xs font-bold">Tải ứng
                            dụng</a>
                        <a href="#" className="text-white px-2 py-1 rounded-md text-xs font-bold">Chăm sóc
                            khách hàng</a>
                        <a href="#" className="text-white px-2 py-1 rounded-md text-xs  font-bold">Kiểm tra
                            đơn hàng</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNavbarComponent;