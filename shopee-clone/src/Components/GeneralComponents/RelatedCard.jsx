import React from 'react';

const RelatedCard = ({title, image, price, sold, location, rating}) => {
    return (<div
        className="card"
        style={{
            boxShadow: '0 2px 4px 0 rgba(0,0,0,.12), 0 -2px 2px 0 rgba(0,0,0,.04)',
        }}
        onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 8px 0 rgba(0,0,0,.24), 0 -4px 4px 0 rgba(0,0,0,.08)'}
        onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 4px 0 rgba(0,0,0,.12), 0 -2px 2px 0 rgba(0,0,0,.04)'}>

        <div className="card-body" style={{
            backgroundColor: 'white', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px',
        }}>
            {/*<img src={image} alt={title} className="rounded-t"/>*/}

            <div className="relative">
                <img src={image} alt={title} className="rounded-t"/>
                <div className="absolute top-[-5px] right-0 m-1">
                    <span className="text-[#6f787e] bg-white rounded-2xl px-2 py-1"
                          style={{fontSize: '10px'}}>Tài trợ</span>
                </div>
            </div>

            <div className="flex mt-3 mb-5 ">
              <span className="card-title text-sm line-clamp-2">
                    <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png"
                         alt="shop-badge" className="h-3 mr-1 inline-block"/>{title}</span>
            </div>

            <p className="card-text text-md text-[#ee2624] font-bold ml-2"> {price}</p>

            <div
                className="inline-flex justify-start items-center text-[11px] ml-2 "
                style={{backgroundColor: 'rgb(241, 243, 249)', borderRadius: '10px'}}>
                <img
                    src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png"
                    alt="promotion-icon" className="w-3 h-3 ml-1"/>
                <span className="ml-1 mr-1" style={{color: 'rgb(19, 48, 150)'}}>Trả góp Kredivo</span>
            </div>

            <p className="card-text text-[11px] ml-2">Đã bán {sold}</p>
            <div className="flex justify-between pb-2">
                <p className="card-text text-[11px] ml-2">
                    {rating}{' '}
                    <span style={{color: 'rgb(255, 198, 0)'}}>★</span>
                </p>
                <p className="card-text text-[11px] mr-2">{location}</p>
            </div>
        </div>
    </div>);
};

export default RelatedCard;
