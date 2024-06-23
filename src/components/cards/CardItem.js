import React, { useState } from 'react';
import './CardItem.css'

export const CardItem = ({
    imgSrc,
    imgAlt,
    header,
    body,
    buttonText,
    isClicked,
    onClick
    }) => {

        return(
            <div className={`carditem-container ${isClicked ? 'clicked' : ''}`} onClick={onClick}>
                <img className='card-img' src={imgSrc} alt={imgAlt} />
                <h1 className='card-header'>{header}</h1>
                <p className='card-body'>{body}</p>
                <div className='button-wrapper'>
                    <button className='button'>{buttonText}</button>
                </div>
                
            </div>

        )
}

export default CardItem;