import React, { useState } from "react";
import CardItem from "./CardItem";
import './Cards.css'

function Cards() {
    const [selectedCard, setSelectedCard] = useState(1);

    const handleCardClick = (index) => {
        setSelectedCard(index === selectedCard ? null : index);
    };

    const cardData = [
        {
            imgSrc: './images/brisbane-1.jpg',
            imgAlt: 'Brisbane City',
            header: 'Heading 1',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum mauris id dignissim consectetur. Duis luctus congue purus, in tristique nisl auctor in.',
            buttonText: 'Button 1'
        },
        {
            imgSrc: './images/brisbane-1.jpg',
            imgAlt: 'Brisbane City',
            header: 'Heading 2',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum mauris id dignissim consectetur. Duis luctus congue purus, in tristique nisl auctor in',
            buttonText: 'Button 2'
        },
        {
            imgSrc: './images/brisbane-1.jpg',
            imgAlt: 'Brisbane City',
            header: 'Heading 3',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum mauris id dignissim consectetur. Duis luctus congue purus, in tristique nisl auctor in. Sed rutrum faucibus sodales.Suspendisse hendrerit aliquam dolor eget facilisis. Praesent sagittis massa massa, ac ultricies dui blandit id.',
            buttonText: 'Button 3'
        }
    ];

    return (
        <div className="cardsWrapper">
            <div className="cardsContainer">
                <ul className="cardsList">
                    {cardData.map((card, index) => (
                        <CardItem
                            key={index}
                            imgSrc={card.imgSrc}
                            imgAlt={card.imgAlt}
                            header={card.header}
                            body={card.body}
                            buttonText={card.buttonText}
                            isClicked={index === selectedCard}
                            onClick={() => handleCardClick(index)}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Cards;
