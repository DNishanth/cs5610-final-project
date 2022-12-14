import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findBooksThunk} from "../services/open-library-thunks";
import {Link, useParams} from "react-router-dom";
import SearchBarComponent from "./index";

const SearchResultsComponent = () => {
    const { searchQuery } = useParams();
    const {bookSearchResults} = useSelector((state) => state.books);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findBooksThunk(searchQuery));
    }, [searchQuery]);
    return (
        <div>
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
                        <a href="/search" className="nav-link active">Search</a>
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
            <ul className="list-group">
                <SearchBarComponent searchTerm={searchQuery}/>
                {bookSearchResults.docs && bookSearchResults.docs.map(result => (
                    <li key={result.key} className="list-group-item">
                        <Link to={"/details/" + result.key.split("/")[2]}>
                            {result.title}
                            <img src={"https://covers.openlibrary.org/b/id/" + result.cover_i + "-S.jpg"}/>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )}
// -M or -L for larger image
export default SearchResultsComponent;