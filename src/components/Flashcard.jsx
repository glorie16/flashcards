import React, { useState } from 'react';
import './Flashcard.css';

const Flashcard = ({ word, translation }) => {
    const [flipped, setFlipped] = useState(false);
    const handleClick = () => {
        setFlipped(!flipped);
    }
        return (
            <div className="cardInfo" onClick={handleClick}>

                <h2 className="content">
                    {flipped ? translation : word}
                </h2>
            </div>
        )
    }
export default Flashcard;