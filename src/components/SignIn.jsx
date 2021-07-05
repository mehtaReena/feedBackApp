
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";

import { signIn,signOut } from "../redux/actions/userAction";
import "../styles.css"


function SignIn() {
    const email = useRef();
    const password = useRef();
    const history = useHistory();
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.userState);

    // console.log("   validated : ", userState);


    const clickhandler = () => {

        dispatch(signIn(email.current.value, password.current.value));

    };

    if (userState.validate) {
        console.log("   validated : ", userState.validate);
        history.push("/profile");

    }

    const signup =()=>{
        dispatch(signOut());

        history.push('/signup')

    }







    return (
        <div className="container">

            <div className="signin">
                <h3> Login </h3>
                <input
                    type="email"
                    name="email"
                    ref={email}
                    placeholder="email"
                />
                <input
                    type="password"
                    name="password"
                    ref={password}
                    placeholder="password"
                />

                <button className="signInBtn" onClick={clickhandler}> 🙎‍♂️ SignIn</button>
                <span className="error">{userState.signinError ? <p>{userState.signinError}</p> : null}</span>
                <button className="signupLink" onClick={signup}> 🙎‍♂️Create an account</button>
            </div>
        </div>
    );
}

export default SignIn;