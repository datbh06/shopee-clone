import {useState} from 'react'
import '../css/ProductDetailSectionStyle.css'
import ModalSigninComponent from "./ModalSigninComponent.jsx";

const ProductDetailComponent = () => {
    const [showModal, setShowModal] = useState(false);
    const [images] = useState({
        img1: "https://media3.scdn.vn/img4/2022/05_31/I1qbSQQnpTMmWOTG68Rq_simg_de2fe0_500x500_maxb.png",
        img2: "https://media3.scdn.vn/img4/2022/05_31/S1Cn4ujZCtvrlIWpaIpe_simg_de2fe0_500x500_maxb.png",
        img3: "https://media3.scdn.vn/img4/2022/05_31/o0rEFXiGJxZ2bXMdrC2u_simg_de2fe0_500x500_maxb.png"
    })

    const [activeImg, setActiveImage] = useState(images.img1)

    const [amount, setAmount] = useState(1);

    // determine the index of the selected image
    const selectedIndex = Object.values(images).indexOf(activeImg) + 1;
    const totalImages = Object.keys(images).length;

    return (<div className='bg-white flex flex-col lg:flex-row gap-16 p-4 rounded-xl'>
        {/*PRODUCT IMAGES*/}
        <div className='flex flex-col gap-6 lg:w-1.25/3'>
            <div className='relative'> {/* add the relative class here */}
                {/*ACTIVE IMAGE*/}
                <img src={activeImg} alt="" className='w-full h-full aspect-square object-cover rounded-xl'/>
                <div
                    className='absolute bottom-0 left-0 bg-gray-200 rounded-xl px-1 py-1 w-12 h-6 text-sm flex justify-center items-center'>
                    {selectedIndex}/{totalImages}
                </div>
                <div className='absolute bottom-0 right-0 flex items-center'>
                    <button className='bg-gray-200 w-8 h-8 flex justify-center items-center mr-2 rounded-sm'>
                        <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                             version="1.1"
                             xmlnsXlink="http://www.w3.org/1999/xlink" className="icon share">
                            <path
                                d="M18 2a4 4 0 1 1-3.017 6.626l-5.07 2.536a4.016 4.016 0 0 1 0 1.676l5.07 2.536a4 4 0 1 1-.895 1.789l-5.07-2.537a4 4 0 1 1 0-5.253l5.07-2.535A4 4 0 0 1 18 2Zm0 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM6 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
                                fill="#6F787E" fillRule="nonzero"></path>
                        </svg>
                    </button>
                    <button className='bg-gray-200  w-8 h-8 flex justify-center items-center rounded-sm'>
                        <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                             version="1.1"
                             xmlnsXlink="http://www.w3.org/1999/xlink" className="icon favorite">
                            <path
                                d="M16.553 2C20.258 2.015 23 5.14 23 9.12c0 3.038-1.694 5.972-4.849 8.81-1.656 1.49-3.77 2.963-5.285 3.747l-.866.45-.866-.45c-1.515-.784-3.63-2.258-5.285-3.747C2.694 15.092 1 12.158 1 9.12 1 5.097 3.716 2 7.455 2c1.395 0 2.376.189 3.467.728a6.3 6.3 0 0 1 1.068.668 6.17 6.17 0 0 1 1.113-.7c1.07-.524 2.003-.696 3.45-.696Zm-.004 2c-1.162 0-1.803.118-2.567.492-.47.23-.887.541-1.25.936l-.73.79-.735-.784a4.266 4.266 0 0 0-1.232-.913C9.248 4.13 8.565 4 7.455 4 4.884 4 3 6.148 3 9.12c0 2.38 1.414 4.83 4.186 7.323 1.512 1.36 3.455 2.718 4.814 3.43 1.359-.712 3.302-2.07 4.814-3.43C19.586 13.949 21 11.5 21 9.12c0-2.931-1.912-5.11-4.45-5.12Z"
                                fill="#6F787E" fillRule="nonzero"></path>
                        </svg>
                    </button>
                </div>

            </div>
            {/*SMALLER SLIDING IMAGES*/}
            <div className='flex flex-row justify-start h-24 gap-2'>
                <img src={images.img1} alt=""
                     className={`w-16 h-16 rounded-md cursor-pointer ${activeImg === images.img1 ? 'selected' : ''}`}
                     onClick={() => setActiveImage(images.img1)}/>
                <img src={images.img2} alt=""
                     className={`w-16 h-16 rounded-md cursor-pointer ${activeImg === images.img2 ? 'selected' : ''}`}
                     onClick={() => setActiveImage(images.img2)}/>
                <img src={images.img3} alt=""
                     className={`w-16 h-16 rounded-md cursor-pointer ${activeImg === images.img3 ? 'selected' : ''}`}
                     onClick={() => setActiveImage(images.img3)}/>
            </div>
        </div>


        {/* PRODUCT DETAILS */}
        <div className='flex flex-col gap-4 lg:w-2/4 text-left'>
            {/*TITLE & PRICE*/}
            <div className='mb-12'>
                <div className='flex items-start'>
                    <div className='bg-red-600 text-white rounded-sm mr-2 text-sm top-0'
                         style={{letterSpacing: '0.1em'}}>Mall
                    </div>
                    <h2 className='text-xl font-bold mb-3'>Nồi áp suất Elmich PCE-1802 (5L) - 4021802</h2>
                </div>

                <p className="text-sm mb-2">Thương hiệu: <a href="/" className="text-blue-600">Elmich</a></p>
                <h6 className='text-red-500 font-bold text-2xl'>2.250.000đ</h6>
            </div>

            {/*NUMBER OF SOLD*/}
            <div className='flex items-center gap-1'>
                <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1"
                     xmlnsXlink="http://www.w3.org/1999/xlink" className="icon cart"
                     style={{color: 'rgb(111, 120, 126)', width: 16, height: 16}}>
                    <path
                        d="M12 2c2.489 0 4.672 1.815 4.966 4h2.881a2 2 0 0 1 1.98 2.283l-1.714 12A2 2 0 0 1 18.133 22H5.867a2 2 0 0 1-1.98-1.717l-1.714-12A2 2 0 0 1 4.153 6h2.88C7.329 3.815 9.512 2 12 2ZM7 8H4.153l1.714 12h12.266l1.714-12H17v2h-2V8H9v2H7V8Zm5-4c-1.398 0-2.624.938-2.928 2h5.856c-.304-1.062-1.53-2-2.928-2Z"
                        fill="#6F787E" fillRule="nonzero"></path>
                </svg>
                <p className="text-gray-600 text-sm" style={{fontSize: '14px'}}>2 lượt mua</p>
            </div>

            {/* CHOOSE THE QUANTITATIVE*/}
            <div className='flex flex-row items-center gap-12'>
                <p className="text-gray-600 text-sm" style={{fontSize: '14px'}}>Chọn số lượng:</p>
                <div className='flex flex-row items-center'>
                    <button
                        className={`bg-gray-200 py-2 px-2 mx-2 rounded-b rounded-t text-gray-800 text-2xl ${amount === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={() => setAmount((prev) => prev > 1 ? prev - 1 : prev)}>
                        <svg width="15" height="15" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1"
                             xmlnsXlink="http://www.w3.org/1999/xlink" className="d7ed-SwZDZ2 d7ed-w34diS">
                            <path fill="#6F787E" fillRule="nonzero" d="M22 11v2H2v-2z"></path>
                        </svg>
                    </button>
                    <input type="number" value={amount} onChange={(e) => {
                        const value = parseInt(e.target.value);
                        if (value >= 1 && value <= 100) {
                            setAmount(value);
                        } else if (e.target.value === '') {
                            setAmount(1);
                        }
                    }}
                           className='border mx-0.5 rounded-b rounded-t text-center focus:outline-none focus:ring-2 focus:ring-blue-500'
                           style={{width: '40px', height: '31.5px', appearance: 'none', color: '#3f4b53'}} min="1"
                           max="100"/>

                    <button
                        className={`bg-gray-200 py-2 px-2 mx-2 rounded-b rounded-t text-gray-800 text-2xl ${amount === 100 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={() => setAmount((prev) => prev < 100 ? prev + 1 : prev)}>
                        <svg width="15" height="15" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1"
                             xmlnsXlink="http://www.w3.org/1999/xlink" className="d7ed-SwZDZ2 d7ed-w34diS">
                            <path fill="#6F787E" fillRule="nonzero" d="M13 11h9v2h-9v9h-2v-9H2v-2h9V2h2z"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/*ADD TO CART & BUY BUTTONS*/}
            <div className='flex flex-row items-center gap-2'>
                <button className='bg-gray-200 text-gray-600
                font-semibold py-3 px-25 rounded-b rounded-t h-full w-1/2'>Thêm vào giỏ
                </button>
                <button
                    className='bg-red-500 text-white font-semibold py-3 px-25 rounded-b rounded-t h-full w-1/2'
                    onClick={() => setShowModal(true)}>Mua ngay
                </button>
                <ModalSigninComponent showModal={showModal} setShowModal={setShowModal}/>
            </div>

            {/*VOUCHERS*/}
            <div className='flex flex-col gap-4 mt-8'>
                <hr/>
                <div className='flex items-center gap-2 justify-between'>
                    <h3>Ưu đãi dành cho bạn</h3>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1"
                         xmlnsXlink="http://www.w3.org/1999/xlink" className="icon i-icon">
                        <path
                            d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1Zm0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm1.004 6.998v4h.999v2h-4v-2h1v-2h-1v-2h3Zm-1.004-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
                            fill="#6F787E" fillRule="nonzero"></path>
                    </svg>
                </div>
                <div className='flex items-center gap-2'>
                    <img src="https://media3.scdn.vn/img4/2022/12_19/k4fhvv3i925lb0CUgGn4.png" alt="Trả góp Kredivo"
                         className="" style={{marginRight: '12.8px', width: '25px', height: '25x'}}/>
                    <p className='text-gray-600 text-sm'>Trả góp Kredivo</p>
                </div>

                {/*BENEFITS & INSURANCE*/}
                <hr/>
                <div className='flex items-center gap-2 justify-between'>
                    <h3>Quyền lợi khách hàng & Bảo hành</h3>

                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1"
                         xmlnsXlink="http://www.w3.org/1999/xlink" className="icon i-icon">
                        <path
                            d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1Zm0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm1.004 6.998v4h.999v2h-4v-2h1v-2h-1v-2h3Zm-1.004-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
                            fill="#6F787E" fillRule="nonzero"></path>
                    </svg>
                </div>
                <div className='flex items-center gap-2'>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1"
                         xmlnsXlink="http://www.w3.org/1999/xlink" className="icon guard-icon">
                        <g fill="none" fillRule="evenodd">
                            <path
                                d="m19 15 .002-1.245.004-1.954.003-1.691c.004-2.232.003-4.148 0-4.74-.33-.206-.846-.524-1.118-.706C16.414 3.68 14.26 3 12 3 9.838 3 7.029 4.051 6.11 4.664c-.27.18-.779.494-1.11.7V15c0 1.508 2.23 3.569 7 5.802 4.772-2.228 7-4.288 7-5.802Z"
                                fill="#D6EFDF"></path>
                            <path
                                d="M12 1c2.995 0 5.5 1 7 2s2 1 2 2c.026.291 0 8.5 0 10 0 2.667-3 5.333-9 8-6-2.673-9-5.34-9-8V5c0-1 .5-1 2-2 .162-.108 3.563-2 7-2Zm0 2C9.838 3 7.029 4.051 6.11 4.664c-.27.18-.779.494-1.11.7V15c0 1.508 2.23 3.569 7 5.802 4.772-2.228 7-4.288 7-5.802v-.694l.001-.167v-.384l.005-1.954.003-1.691v-.575c.004-1.98.003-3.625 0-4.166-.33-.205-.846-.523-1.118-.705C16.414 3.68 14.26 3 12 3Zm3.293 5.293 1.414 1.414L11 15.414l-3.707-3.707 1.414-1.414L11 12.586l4.293-4.293Z"
                                fill="#449460"></path>
                        </g>
                    </svg>
                    <p className='text-gray-600 text-sm'>7 ngày hoàn trả</p>

                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1"
                         xmlnsXlink="http://www.w3.org/1999/xlink" className="icon guard-icon">
                        <g fill="none" fillRule="evenodd">
                            <path
                                d="m19 15 .002-1.245.004-1.954.003-1.691c.004-2.232.003-4.148 0-4.74-.33-.206-.846-.524-1.118-.706C16.414 3.68 14.26 3 12 3 9.838 3 7.029 4.051 6.11 4.664c-.27.18-.779.494-1.11.7V15c0 1.508 2.23 3.569 7 5.802 4.772-2.228 7-4.288 7-5.802Z"
                                fill="#D6EFDF"></path>
                            <path
                                d="M12 1c2.995 0 5.5 1 7 2s2 1 2 2c.026.291 0 8.5 0 10 0 2.667-3 5.333-9 8-6-2.673-9-5.34-9-8V5c0-1 .5-1 2-2 .162-.108 3.563-2 7-2Zm0 2C9.838 3 7.029 4.051 6.11 4.664c-.27.18-.779.494-1.11.7V15c0 1.508 2.23 3.569 7 5.802 4.772-2.228 7-4.288 7-5.802v-.694l.001-.167v-.384l.005-1.954.003-1.691v-.575c.004-1.98.003-3.625 0-4.166-.33-.205-.846-.523-1.118-.705C16.414 3.68 14.26 3 12 3Zm3.293 5.293 1.414 1.414L11 15.414l-3.707-3.707 1.414-1.414L11 12.586l4.293-4.293Z"
                                fill="#449460"></path>
                        </g>
                    </svg>
                    <div className='flex flex-col'>
                        <p className='text-gray-600 text-sm'>Bảo hành theo chính </p>
                        <p className='text-gray-600 text-sm'>sách từ Nhà bán hàng</p>
                    </div>
                </div>
            </div>

        </div>


    </div>)
}

export default ProductDetailComponent