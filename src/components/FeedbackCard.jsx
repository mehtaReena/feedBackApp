import React from 'react';
import "../styles.css"
import { useDispatch } from 'react-redux';
import {removefromDB} from '../redux/actions/feedbackAction'

function FeedbackCard(props) {
    let dispatch=useDispatch();
    const removehandler=()=>{
         dispatch(removefromDB(props.user ,props.id))
    }
    return (
        <div className="cardInfo">
            <p>{props.message}</p>

           <button className="remove" onClick={removehandler}>❌</button>
        </div>
    );
}

export default FeedbackCard;