import React, { useState } from 'react';
import './ImageZoom.module.css';

const ImageZoom = ({ image, title, description }) => {
    const [isZoomed, setIsZoomed] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleZoom = () => {
        setIsZoomed(!isZoomed);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div 
            className={`image-container ${isZoomed ? 'zoomed' : ''}`} 
            onClick={handleZoom}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img 
                src={image} 
                alt={title} 
                className="image"
            />
            {isZoomed && isHovered && (
                <div className="image-info">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            )}
        </div>
    );
};

export default ImageZoom;
