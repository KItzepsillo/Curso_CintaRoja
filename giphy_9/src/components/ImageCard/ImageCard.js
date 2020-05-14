import React from 'react';
import './ImageCard.css';

const ImageCard = (props) => {
    return (
        <div className="card">
            <img src= {props.img} alt=""/>
        </div>
    )
}

export default ImageCard
