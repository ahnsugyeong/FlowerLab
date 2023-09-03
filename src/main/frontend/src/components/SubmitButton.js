import React from 'react';

import '../styles/SubmitButton.css'

function SubmitButton({onClick}) {

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <div className="laboratory-submit-container" onClick={handleClick}>
            <div className="laboratory-submit-btn">
                <div className="laboratory-submit-btn-text">
                    AI 꽃다발 추천받기
                </div>
                <div className="laboratory-submit-btn-next">
                    →
                </div>
            </div>
        </div>

    );
}

export default SubmitButton;