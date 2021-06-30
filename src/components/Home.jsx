import { useHistory } from "react-router";



function App() {
    let history = useHistory();
    const clickHandler = () => {
        history.push("/signin");
    }


    return (
        <>

            <div className="container">
                            <div className="homePage">
                    <div>
                        <button className="button homebtn" onClick={clickHandler}> login here</button>
                    </div>

                </div>
            </div>


        </>
    );
}

export default App;
