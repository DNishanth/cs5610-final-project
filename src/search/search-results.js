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