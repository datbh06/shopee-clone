import CarouselComponent from "./CarouselComponent.jsx";

const RetailInfoComponent = () => {
    return (<div
        className={`inline-block align-bottom bg-white rounded-lg p-6
                    text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full relative`}>
        <p className='text-md font-semibold'>Thông tin nhà cung cấp</p>
        <div className={"flex"}>
            <img src="https://media3.scdn.vn/img4/2022/09_27/nqrquod949Ya6lzfHNQX.png" alt="shop-avatar"
                 className='w-16 h-16 rounded-md cursor-pointer'/>
            <div className="flex flex-col flex-end">
                <p className='text-md font-semibold mb-1'>Elmich official store</p>
                <img src="https://media3.scdn.vn/img4/2022/08_17/nbMbRRfJY3a65DmxuyUH.png" alt="Shop's badge"
                     className="w-8 h-4"/>
                <p className="text-xs text-[#6f787e] mt-2">
                    Hà Nội | 4.8{' '}
                    <span style={{color: 'rgb(255, 198, 0)'}}>★</span>
                </p>
            </div>
        </div>
        <div className="grid grid-cols-5 grid-rows-2 mt-3 gap-x-8 gap-y-0  justify-center align-middle ml-4 ">
            <p className='text-md font-semibold'>1 năm</p>
            <p className='text-md font-semibold'>220</p>
            <p className='text-md font-semibold'>2 ngày</p>
            <p className='text-md font-semibold'>--</p>
            <p className='text-md font-semibold'>--</p>
            <div className="col-span-5 flex justify-between">
                <p className="text-xs text-[#0f1e29]">Bán ở Sendo</p>
                <p className="text-xs text-[#0f1e29]">Sản phẩm</p>
                <p className="text-xs text-[#0f1e29]">Chuẩn bị hàng</p>
                <p className="text-xs text-[#0f1e29]">Tỉ lệ phản hồi</p>
                <p className="text-xs text-[#0f1e29]">Shop phản hồi</p>
            </div>
        </div>
        <div className="grid mb-4 " style={{gridTemplateColumns: '45fr 45fr 10fr', gap: "5px"}}>
            <button
                className="h-10 bg-[#e7e8ea] text-[#3f4b53] text-sm font-semibold rounded-b rounded-t flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" version="1.1"
                     xmlnsXlink="http://www.w3.org/1999/xlink" className="mr-2">
                    <path
                        d="M16.553 2C20.258 2.015 23 5.14 23 9.12c0 .631-.073 1.258-.217 1.88H20.71a6.43 6.43 0 0 0 .289-1.88c0-2.931-1.912-5.11-4.45-5.12-1.163 0-1.804.118-2.568.492a4.18 4.18 0 0 0-1.25.936l-.73.79-.735-.784a4.262 4.262 0 0 0-1.232-.913C9.248 4.13 8.565 4 7.455 4 4.884 4 3 6.148 3 9.12c0 2.38 1.414 4.83 4.186 7.323 1.512 1.36 3.455 2.718 4.814 3.43v2.253l-.866-.449c-1.515-.784-3.63-2.258-5.285-3.747C2.694 15.092 1 12.158 1 9.12 1 5.097 3.716 2 7.455 2c1.395 0 2.376.189 3.467.728.38.188.736.41 1.068.668a6.146 6.146 0 0 1 1.113-.7c1.07-.524 2.003-.696 3.45-.696zM19 13v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2z"
                        fill="#6F787E" fillRule="nonzero"></path>
                </svg>
                Theo dõi shop
            </button>
            <button
                className="bg-[#e7e8ea] text-[#3f4b53] text-sm font-semibold rounded-b rounded-t  flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1"
                     xmlnsXlink="http://www.w3.org/1999/xlink" className="mr-2" style={{color: "rgb(63, 75, 83)"}}>
                    <path
                        d="M19 14a1 1 0 0 1 1 1v5a1 1 0 0 1-.883.993L19 21H5a1 1 0 0 1-1-1v-5a1 1 0 0 1 2 0v4h12v-4a1 1 0 0 1 1-1Zm-6 1a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2h2Zm5-12a1 1 0 0 1 1 1.004c-.001.245.197.557.718 1.046.122.113.256.233.44.393l.5.432C22.25 7.267 23 8.36 23 10c0 1.598-1.431 3-3 3-.743 0-1.458-.321-2.004-.829-.545.506-1.258.829-1.996.829-.74 0-1.454-.325-2-.833-.545.508-1.26.833-2 .833-.747 0-1.461-.315-2.006-.819C9.45 12.683 8.74 13 8 13c-.74 0-1.455-.325-2-.833-.548.509-1.264.833-2.007.833-1.557 0-2.998-1.446-2.998-3 0-1.64.751-2.732 2.345-4.123.112-.098.483-.416.504-.435.186-.161.322-.282.444-.396.519-.486.714-.796.712-1.037A1 1 0 0 1 6 3h12Zm-.804 2H6.806c-.213.513-.6.99-1.151 1.506-.145.135-.298.271-.502.448l-.498.43C3.461 8.426 2.995 9.104 2.995 10c0 .451.547 1 .998 1C4.453 11 5 10.458 5 10c0-1.333 2-1.333 2 0 0 .458.546 1 1 1 .464 0 1-.528 1-1 0-1.333 2-1.333 2 0 0 .49.523 1 1 1 .454 0 1-.543 1-1 0-1.333 2-1.333 2 0 0 .456.547 1 1 1 .455 0 1-.542 1-1 0-1.333 2-1.333 2 0 0 .47.537 1 1 1 .473 0 1-.516 1-1 0-.898-.465-1.576-1.658-2.62l-.494-.426c-.202-.175-.354-.31-.497-.445-.553-.518-.94-.995-1.155-1.509Z"
                        fill="#6F787E" fillRule="nonzero"></path>
                </svg>
                Vào Shop
            </button>
            <button
                className="bg-[#e7e8ea] text-[#3f4b53] text-sm font-semibold rounded-b rounded-t flex justify-center items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1"
                     xmlnsXlink="http://www.w3.org/1999/xlink" className="mr-2">
                    <path
                        d="M8.22 2.729c.555.548 1.44 1.685 2.755 3.525.585.65.4 1.386-.118 2.084a5.453 5.453 0 0 1-.436.508 14.89 14.89 0 0 1-.28.285l-.767.768c-.1.1.586 1.47 1.917 2.803 1.33 1.331 2.7 2.018 2.801 1.917l.767-.767c.422-.422.645-.626.952-.827.638-.42 1.335-.533 1.922-.008 1.917 1.372 3.002 2.213 3.534 2.765 1.037 1.078.9 2.736.006 3.682-.31.328-.704.722-1.169 1.17-2.811 2.813-8.745 1.101-13.293-3.45C2.263 12.63.551 6.695 3.358 3.888c.503-.512.67-.678 1.16-1.161.913-.9 2.648-1.041 3.703 0Zm-2.3 1.424c-.483.476-.642.635-1.144 1.145-1.804 1.805-.423 6.595 3.45 10.471 3.87 3.875 8.66 5.257 10.478 3.438.457-.441.83-.815 1.117-1.118.208-.22.245-.671.006-.92-.397-.412-1.37-1.17-3.05-2.377a6.856 6.856 0 0 0-.505.474l-.766.767c-1.303 1.303-3.521.192-5.629-1.917-2.109-2.111-3.219-4.329-1.916-5.632l.766-.766c.123-.123.18-.18.246-.25.092-.097.167-.182.228-.257-1.166-1.623-1.958-2.637-2.385-3.06-.22-.217-.714-.177-.896.002Zm7.735-2.083a9.505 9.505 0 0 1 8.275 8.275l-1.975.33a7.503 7.503 0 0 0-6.63-6.63l.33-1.975Zm-.659 3.952a5.501 5.501 0 0 1 4.982 4.982l-1.982.33a3.5 3.5 0 0 0-3.33-3.33l.33-1.982Z"
                        fill="#6F787E" fillRule="nonzero"></path>
                </svg>

            </button>
        </div>

        <div>
            <hr/>
            <p className='text-sm font-semibold mt-3 mb-4'>Gợi ý thêm từ Shop</p>
            <div style={{
                background: 'linear-gradient(to bottom, white, pink)', borderRadius: '10px', padding: '10px',
            }}>
                <CarouselComponent/>
            </div>
        </div>
    </div>);
};

export default RetailInfoComponent;