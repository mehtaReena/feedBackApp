import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  {fetchFeedBack} from '../redux/actions/feedbackAction'
import "../styles.css"
import FeedbackCard from './FeedbackCard';
import Navbar from './Navbar'


function Profile(props) {
    let dispatch=useDispatch();
    const userState = useSelector((state) => state.userState);
      let user= userState.currentUser;
      const feedback = useSelector((state) => state.feedbackState);
      console.log(" feedbacks ...",  user, feedback.feedbacks)



useEffect(()=>{
    if(user){
    dispatch(fetchFeedBack(user))
    }
    // eslint-disable-next-line
},[])

    return (
        <div className="container">
          <Navbar/>
          <div className="profile-pic">
              <img src="/images/image.png" alt=""></img>
          </div>
          <div className ="info">
          <h3> Hi {user}</h3>
          <h5> http://localhost:3000/{user}</h5>

          </div>


          {feedback.loading ? (
                <h3>Loading . . .</h3>
            ) : (
                <div className="feedback-wrapper">
                <div class="tip">Received</div>
                <div className="feedbacks">
                    {feedback.feedbacks.map((item, idx) =>
                        <FeedbackCard
                        key={idx}
                        id={item[0]}
                        user={user}
                        message={item[1].feedback}

                    />

                    )}
                </div>
                </div>

            )}
        </div>
    );
}

export default Profile;