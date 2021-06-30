
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { signUp, signupErr } from "../redux/actions/userAction";
import "../styles.css"


function SignUp() {
    const email = useRef();
    const password = useRef();
    const userId = useRef();
    const repassword = useRef();
    const history = useHistory();
    const dispatch = useDispatch();
    const {signupError, confirm ,currentUser} = useSelector(state => state.userState);

    const clickhandler = () => {
        if(password.current.value !== repassword.current.value) {
            dispatch(signupErr('Password mismatch'));
            return;
        };

        dispatch(signUp(email.current.value, password.current.value ,userId.current.value));
    }

    if(confirm) history.push("/");

    return (
        <div className="sign-up">
            <h4>Create new account.</h4>
            <input type="text" ref={userId} placeholder="display-name" />
            <input type="email" ref={email} placeholder="email" />
            <input type="password" ref={password} placeholder="password" />
            <input type="password" ref={repassword} placeholder="re-enter password" />
            <button className ="sign-upbtn"onClick={clickhandler}>Submit</button>
            {signupError ? <p>{signupError}</p> : null}
        </div>
    )
}

export default SignUp;
