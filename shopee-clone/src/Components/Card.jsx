import React from 'react';

const Card = ({imgSrc, title, oldPrice, discount, newPrice}) => {
    return (<div className="card"
                 style={{boxShadow: '0 2px 4px 0 rgba(0,0,0,.12), 0 -2px 2px 0 rgba(0,0,0,.04)'}}>
        <img src={imgSrc} alt={title} className="rounded-t"/>
        <div className="card-body text-sm" style={{backgroundColor: 'white', borderRadius: '10px'}}>
            <h5 className="card-title" style={{
                maxHeight: "2.4em", overflow: "hidden", textOverflow: " ellipsis", marginBottom: "0.5em",
            }}>{title}</h5>
            <p className="card-text">
                <span className="old-price text-xs text-[#b7bbbf] line-through">{oldPrice}</span>
                <span className="discount  text-xs text-[#ee2624] ml-1">{discount}</span>

            </p>
            <span className="new-price text-sm text-[#ee2624] font-bold">{newPrice}</span>
        </div>
    </div>);
};

export default Card;
