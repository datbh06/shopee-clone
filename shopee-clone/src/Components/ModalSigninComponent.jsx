import {useState} from "react";

function ModalSigninComponent({showModal, setShowModal}) {
    if (!showModal) {
        return null;
    }
    const [inputValue, setInputValue] = useState('');

    return (<div className={`fixed z-10 inset-0 overflow-y-auto`} aria-labelledby={`modal-title`}
                 role={`dialog`} aria-modal={`true`}>
        <div
            className={`flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0`}>
            <div className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity`}
                 aria-hidden={`true`}/>
            {/* This element is to trick the browser into centering the modal contents. */}
            <span className={`hidden sm:inline-block sm:align-middle sm:h-screen`}
                  aria-hidden={`true`}>&#8203;</span>

            <div
                className={`inline-block align-bottom bg-white rounded-lg
                    text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full relative`}>
                <button
                    type={`button`}
                    className={`absolute right-0 mt-3 mr-3 inline-flex justify-center rounded-b rounded-t border-none  px-4 py-2
                         bg-white text-base text-[#3f4b53] hover:bg-gray-200 focus:outline-none font-bold sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm`}
                    onClick={() => setShowModal(false)}>Thoát
                </button>
                <div className={`bg-white px-4 pt-9 pb-4 sm:p-6 sm:pb-4 mt-6`}>
                    {/* Modal content */}
                    <h2 className="font-semibold text-xl text-[#0f1e29]">Xin Chào, </h2>
                    <p className="text-[#0f1e29] text-sm mt-2 ">Đăng nhập hoặc đăng ký tài khoản</p>

                    <div className="relative overflow-visible">
                        <input type="tel" placeholder="Nhập số điện thoại"
                               className="w-full h-12 rounded-b rounded-t mt-6 border border-gray-300 focus:border-2
                        focus:border-blue-500 focus:outline-none hover:border-blue-500 text-sm pl-4"
                               value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                        {inputValue && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 version="1.1"
                                 xmlnsXlink="http://www.w3.org/1999/xlink"
                                 className="absolute right-4 top-12 transform -translate-y-1/2 cursor-pointer"
                                 onClick={() => setInputValue('')}>
                                <path
                                    fill="#6F787E"
                                    d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
                            </svg>)}
                    </div>

                    <button
                        className={`w-full h-12 rounded-b rounded-t mt-6 focus:outline-none text-md text-[#b7bbbf] font-bold ${inputValue ? 'bg-red-500 text-[#ffffff]' : 'bg-[#f2f3f4] text-[#b7bbbf] cursor-not-allowed'}`}>
                                     <span className="flex items-center justify-center">
                                      Tiếp tục
                                      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                           version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink"
                                           className={`ml-2 ${inputValue ? 'fill-current' : ''}`}>
                                        <path fill={inputValue ? '#ffffff' : '#b7bbbf'} fillRule="nonzero"
                                              d="M13.214 12 8 6.476 9.393 5 16 12l-6.607 7L8 17.524z"
                                        ></path>
                                      </svg>
                                    </span>
                    </button>

                    <div className="flex items-start justify-start mt-20 flex-col gap-20">
                        <p className="text-xs text-[#6f787e]">Hoặc thông qua:</p>
                        <div>
                            <image src="../public/google.png" alt="google" className="w-10 h-10 bg-white "/>

                        </div>

                    </div>
                    <p className="text-xs text-[#6f787e]">Khi dùng tài khoản Sendo, bạn đã đồng ý về
                        <a href="/" className='text-[#0f62fe]'> điều khoản dịch vụ. </a></p>
                </div>
            </div>
        </div>

    </div>);
}

export default ModalSigninComponent;