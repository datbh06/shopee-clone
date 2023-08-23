import React, {useState} from 'react';
import ModalSigninComponent from "../GeneralComponents/ModalSigninComponent.jsx";

const QuestioningComponent = () => {
    const [showModal, setShowModal] = useState(false);

    return (<div className={`bg-white rounded-lg p-6 text-left shadow-xl sm:my-8 sm:w-full sm:h-fit`}>
        <div className="flex justify-between">
            <div>
                <p className='text-md font-semibold mb-3'>Hỏi về sản phẩm</p>
                <p className='text-sm'>Bạn có thắc mắc cần giải đáp?</p>
            </div>
            <button
                className='bg-gray-200 w-8 h-8 flex justify-center items-center mr-2 rounded-sm hover:bg-[#f2f3f4] hover:border-[#f2f3f4]'>
                <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1"
                     xmlnsXlink="http://www.w3.org/1999/xlink">
                    <path d="M7 1v1h14.125l-2.999 6 3 6H7v9H5V1h2Zm10.89 3H7v8h10.89l-2-4 2-4Z" fill="#3f4b53"
                          fillRule="nonzero"></path>
                </svg>
            </button>
        </div>
        <button
            className="mt-6 bg-[#e7e8ea] border-1 border-[#e7e8ea] hover:bg-[#f2f3f4] hover:border-[#f2f3f4] text-[#3f4b53] text-[14px] font-bold py-3 px-4 w-full rounded flex items-center justify-center gap-2"
            onClick={() => setShowModal(true)}>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1"
                 xmlnsXlink="http://www.w3.org/1999/xlink">
                <path
                    d="M20 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7.913L6 21.804V18H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16Zm0 2H4v12h4v2.196L11.513 16H20V4Zm-6 7v2H7v-2h7Zm2-4v2H7V7h9Z"
                    fill="#3f4b53" fillRule="nonzero"></path>
            </svg>
            Hỏi Shop Ngay
        </button>
        <ModalSigninComponent showModal={showModal} setShowModal={setShowModal}/>
    </div>);
};

export default QuestioningComponent;