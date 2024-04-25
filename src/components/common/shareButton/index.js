import React from 'react';

const ShareButton = ({ text, outLined, onClick }) => {
    const handleShare = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: document.title,
                    text: text,
                    url: window.location.href
                });
            } else {
                console.log("Web Share API not supported");
                // Provide fallback behavior
            }
        } catch (error) {
            console.error("Error sharing:", error);
        }
    };

    return (
        <button className={outLined ? "outlined-btn" : "btn"} 
            onClick={() => {
                handleShare();
                onClick();
            }}
        >
            {text}
        </button>
    );
};

export default ShareButton;
