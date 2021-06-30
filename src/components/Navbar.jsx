
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../redux/actions/userAction";
import '../styles.css';

function Nav() {
    const history = useHistory();
    const dispatch = useDispatch();


    const _singIn = () => {
        history.push("/signin");
    }

    const _signOut = () => {
        dispatch(signOut());
        history.push("/");
    }

    const userState = useSelector((state) => state.userState);

    return (
        <div className="nav">
            <div>

                 <div className="navUser">
                     <p> Hi {userState.currentUser}</p>

                {userState.validate ?
                    <button className="nav-link" onClick={_signOut}>  🙎‍♂️ SignOut</button>
                    :
                    <button className="nav-link" onClick={_singIn}>  🙎‍♂️ SignIn</button>
                }
            </div>
            </div>

        </div>
    );
}

export default Nav;