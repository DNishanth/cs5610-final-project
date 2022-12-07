import SearchComponent from "../search";
import LogoComponent from "./logo";
import "./index.css";

// NOT logged in home screen
const HomeComponent = () =>
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
                        <a href="/" className="nav-link ">Search</a>
                    </li>
                    <li className="nav-item">
                        <a href="/profile" className="nav-link">Profile</a>
                    </li>

                </ul>
            </div>
            <div className="col-5 mt-1 wd-searchbar" align="center">
                <SearchComponent/>
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
export default HomeComponent;