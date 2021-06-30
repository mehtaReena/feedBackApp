import React from 'react';
import "../styles.css"

function FeedbackCard(props) {
    return (
        <div className="cardInfo">
            <p>{props.message}</p>

        </div>
    );
}

export default FeedbackCard;