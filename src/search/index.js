import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findBooksThunk} from "../services/open-library-thunks";
import {Link} from "react-router-dom";

const SearchComponent = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const {bookSearchResults} = useSelector((state) => state.books);
    const dispatch = useDispatch();
    // TODO: onclick of item should go to details page
    return (
    <div>
        <ul className="list-group">
            <li className="list-group-item">
                <button
                    className="btn btn-primary float-end"
                    onClick={() => {
                        dispatch(findBooksThunk(searchTerm));
                    }}>Search
                </button>
                <input
                    className="form-control w-75"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}/>
            </li>
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
export default SearchComponent;