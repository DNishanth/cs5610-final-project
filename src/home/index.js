import SearchBarComponent from "../search";
import LogoComponent from "./logo";
import "./index.css";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {logoutThunk} from "../login/user-thunks";

// NOT logged in home screen
const LoggedOutHomeComponent = () => {
    const {currentUser} = useSelector((state) => state.users);
    console.log(currentUser);
    return (
        <div className="wd-homepage">
            <div className="row">
                <div className="col-6">
                    <ul className="nav nav-pills mb-2 mt-2 ms-2">
                        <h2 className="nav-item" style={{marginTop:"-11px"}}>
                            <a href="/home" className="nav-link">Athenaeum</a>
                        </h2>
                        <li className="nav-item">
                            <a href="/home" className="nav-link active">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/search" className="nav-link ">Search</a>
                        </li>
                        <li className="nav-item nav-link">
                            <Link to={"/profile"} style={{textDecoration: "none"}}>
                                Profile
                            </Link>
                        </li>

                    </ul>
                </div>
                <div className="col-5 mt-1 wd-searchbar" align="center">
                    <SearchBarComponent/>
                </div>
                <div className="col-2">
                    <ul className="nav nav-pills mb-2 mt-2 ms-5">
                        <li className="nav-item">
                            <a href="/login" className="nav-link">Login</a>
                        </li>
                        <li className="nav-item">
                            <a href="/register" className="nav-link">Register</a>
                        </li>
                    </ul>
                </div>
            </div>
            <br/><br/>
            <div className="row">
                <div className="col-10" align="center">
                    <h1>Welcome to Athenaeum!</h1>
                    <br/>
                    <h2 className="wd-about-heading" align="left">About</h2>
                    <div className="wd-about-content" align="left">
                        <p>Athenaeum is an online library resource to search for books, authors, and more!
                            <br/>Easily search for works by title, author, or subject.</p>
                    </div>
                    <br/><br/>
                    <a href="/register" className="wd-homepage-link">
                        <h2 className="wd-about-heading" align="left">Create a Profile</h2>
                    </a>
                    <div className="wd-about-content" align="left">
                        <p>Create your own Athenaeum profile to create reviews, as well as customize your own favorites and searches. </p>
                    </div>
                    <br/><br/>
                    <h2 className="wd-about-heading" align="left">See the latest from our users:</h2>

                </div>

            </div>
        </div>
    )
}

const LoggedInHomeComponent = () => {
    const {currentUser} = useSelector((state) => state.users);
    const dispatch = useDispatch();
    console.log(currentUser);
    return (
        <div className="wd-homepage">
            <div className="row">
                <div className="col-6">
                    <ul className="nav nav-pills mb-2 mt-2 ms-2">
                        <h2 className="nav-item" style={{marginTop:"-11px"}}>
                            <a href="/home" className="nav-link">Athenaeum</a>
                        </h2>
                        <li className="nav-item">
                            <a href="/home" className="nav-link active">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/search" className="nav-link ">Search</a>
                        </li>
                        <li className="nav-item nav-link">
                            <Link to={"/profile"} style={{textDecoration: "none"}}>
                                Profile
                            </Link>
                        </li>

                    </ul>
                </div>
                <div className="col-5 mt-1 wd-searchbar" align="center">
                    <SearchBarComponent/>
                </div>
                <div className="col-2">
                    <ul className="nav nav-pills mb-2 mt-2 ms-5">
                        <li className="nav-item">
                            <a href="/home" className="nav-link" onClick={() => dispatch(logoutThunk())}>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
            <br/><br/>
            <div className="row">
                <div className="col-10" align="center">
                    <h1>Welcome back to Athenaeum, {currentUser.username}!</h1>
                    <br/>
                    <h2 className="wd-about-heading" align="left">View Your Follows:</h2>
                    <br/><br/>
                    <h2 className="wd-about-heading" align="left">View Your Reviews:</h2>
                    <br/><br/>
                    <h2 className="wd-about-heading" align="left">See the latest from our users:</h2>

                </div>

            </div>
        </div>
    )
}

const HomeComponent = () => {
    const {currentUser} = useSelector((state) => state.users);
    if (currentUser) {
        return <LoggedInHomeComponent/>
    } else {
        return <LoggedOutHomeComponent/>
    }
}

export default HomeComponent;