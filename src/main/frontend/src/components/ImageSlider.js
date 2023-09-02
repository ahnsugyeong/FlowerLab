import React, { useState, useRef, useEffect } from 'react';

import '../styles/laboratory/ImageSlider.css';


const ImageSlider = ({ setClickedItem }) => {
    const totalDesigns = 6;
    const itemsPerPage = 4;
    const slideItemWidth = 760;
    const [currentSlide, setCurrentSlide] = useState(0);
    const [clickedItem, setLocalClickedItem] = useState(null);
    


    const sliderTrackRef = useRef(null);


    useEffect(() => {
        const sliderTrack = sliderTrackRef.current;
        if (sliderTrack) {
            sliderTrack.style.transform = `translateX(-${currentSlide * slideItemWidth}px)`;
        }
    }, [currentSlide, slideItemWidth]);

    const handleItemClick = (index) => {
        if (clickedItem === index) {
            setLocalClickedItem(null);
            setClickedItem(null);
        } else {
            setLocalClickedItem(index);
            setClickedItem(index);
        }
    };

    const nextSlide = () => {
        const maxSlide = totalDesigns - itemsPerPage;
        if (currentSlide < maxSlide - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const isAtFirstSlide = currentSlide === 0;
    const isAtLastSlide = currentSlide === totalDesigns - itemsPerPage - 1;

    return (
        <div className="image-slider-container">
            <div className="step2-design-slider" style={{ width: `${itemsPerPage * slideItemWidth}px` }}>
                <div className="step2-design-slider-track" ref={sliderTrackRef}>
                    <div className="step2-design-grid">
                        {[1, 2, 3, 4, 5, 6].map((itemIndex) => (
                            <div key={itemIndex} className={`step2-design-grid-item-div`}>
                                <div
                                    className={`step2-design-grid-item-${itemIndex} ${clickedItem === itemIndex ? 'clicked' : ''}`}
                                    onClick={() => handleItemClick(itemIndex)}
                                >
                                    <div className={`star-group ${clickedItem === itemIndex ? 'visible' : ''} ${itemIndex % 2 === 0 ? 'right' : 'left'}`}>
                                        <div className="star star-1"></div>
                                        <div className="star star-2"></div>
                                        <div className="star star-3"></div>
                                    </div>
                                    <img
                                        src={require(`../assets/flower${itemIndex}.png`)}
                                        alt={`Flower ${itemIndex}`}
                                        style={{
                                            opacity: clickedItem === null ? 1 : clickedItem === itemIndex ? 1 : 0.4,
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                

            </div>
            {
                !isAtFirstSlide && (
                    <div className="step2-design-prev-btn" onClick={prevSlide}>
                        ‹
                    </div>
                )
            }
            {
                !isAtLastSlide && (
                    <div className="step2-design-next-btn" onClick={nextSlide}>
                        ›
                    </div>
                )
            }
        </div >
    );
};

export default ImageSlider;
