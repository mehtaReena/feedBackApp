import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "../styles.css";
import  {addFeedback} from '../redux/actions/feedbackAction'
;

function Feedback(props) {
       const messageRef = useRef();
       let dispatch=useDispatch();
       let user = props.match.params.user
       console.log( " user " , user)



    let sendMessageHandler = () => {

        dispatch(addFeedback(user, messageRef.current.value))
           messageRef.current.value="";


    }


    return (
        <div className="container">

            <h1>{user}</h1>

            <div className="send-message">
                <textarea ref={messageRef} type="text" placeholder="Type something..." />
                <button className="button" onClick={sendMessageHandler} >Send</button>
            </div>



        </div>
    );
}

export default Feedback;