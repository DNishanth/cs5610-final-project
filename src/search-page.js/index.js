import SearchComponent from "../search";
import "./index.css";
const SearchPageComponent = () => 

    <div className="wd-search-page">
        <div className="row d-flex justify-content-between">
            <div className="col-6">
                <ul className="nav nav-pills mb-2 mt-2 ms-2">
                    <h2 className="nav-item" style={{marginTop:"-11px"}}>
                        <a href="/home" className="nav-link">Athenaeum</a>
                    </h2>
                    <li className="nav-item">
                        <a href="/home" className="nav-link ">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link active">Search</a>
                    </li>
                    <li className="nav-item">
                        <a href="/profile" className="nav-link">Profile</a>
                    </li>
                </ul>
            </div>
            <div className="col-3">
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
            
        <div className="mt-5 w-75 ms-5" align="center">
            <SearchComponent/>
        </div>
        
    </div>


export default SearchPageComponent;