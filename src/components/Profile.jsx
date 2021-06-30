import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  app from '../redux/firebaseConfig'
import  {fetchFeedBack} from '../redux/actions/feedbackAction'
import "../styles.css"
import FeedbackCard from './FeedbackCard'


function Profile(props) {
    let dispatch=useDispatch();
    const userState = useSelector((state) => state.userState);
      let user= userState.currentUser;
      const feedback = useSelector((state) => state.feedbackState);
      console.log(" feedbacks ...",   feedback.feedbacks)



useEffect(()=>{
    dispatch(fetchFeedBack(user))

},[])

    return (
        <div className="container">
          <h4> http://localhost:3000/{user}</h4>


          {feedback.loading ? (
                <h3>Loading . . .</h3>
            ) : (
                <div className="details">
                    {feedback.feedbacks.map((item, idx) =>
                        <FeedbackCard
                        key={idx}
                        index={idx}
                        message={item.message}

                    />

                    )}
                </div>

            )}
        </div>
    );
}

export default Profile;