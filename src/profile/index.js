import SearchComponent from "../search";
import "./index.css";

const ProfileComponent = () =>
    <div className="wd-profile-page">
        <div className="row">
            <div className="col-6">
                <ul className="nav nav-pills mb-2 mt-2 ms-2">
                    <h2 className="nav-item" style={{marginTop:"-11px"}}>
                        <a href="/" className="nav-link">Athenaeum</a>
                    </h2>
                    <li className="nav-item">
                        <a href="/" className="nav-link ">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link ">Search</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link active">Profile</a>
                    </li>
 
                </ul>
            </div>
            <div className="col-5 mt-1 wd-searchbar" align="center">
                <SearchComponent/>
            </div>
            <div className="col-2">
                <ul className="nav nav-pills mb-2 mt-2 ms-3">
                    <li className="nav-item">
                        <a href="/" className="nav-link">Login</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">Register</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
export default ProfileComponent;