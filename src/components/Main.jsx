import {
    BrowserRouter as Router,
    Switch,
    Route

} from "react-router-dom";

import Home from './Home.jsx';
import SignIn from "./SignIn.jsx";
import SignUp from './SignUp';
import Feedback from './Feedback'
import Profile from './Profile'

export default function Main() {

    return (
        <Router>
            <Switch>

            <Route exact path="/" component={Home} />
                <Route exact path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/profile" component={Profile} />
                <Route path="/:user" component={Feedback} />




                <Route path="/404">
                    <h2> Page not found</h2>
                </Route>
            </Switch>



        </Router>
    )
}