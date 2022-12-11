import {useState} from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const SearchBarComponent = () => {
    const {pathname} = useLocation();
    const searchParam = pathname.split('/')[2];
    const [searchTerm, setSearchTerm] = useState(searchParam ? searchParam : "");
    return (
    <div>
        <div> This is the search bar from search bar class</div>
        <ul className="list-group">
            <li className="list-group-item">
                <Link to={"/search/" + searchTerm}>
                    <button
                        className="btn btn-primary float-end"
                    >Search
                    </button>
                </Link>
                <input
                    className="form-control w-75"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                    placeholder="Search book title, author, etc."/>
            </li>
        </ul>
    </div>
    )}
export default SearchBarComponent;