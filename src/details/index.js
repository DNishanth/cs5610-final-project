import {useLocation} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {findBookByWorkIDThunk} from "../services/open-library-thunks";
import {useEffect} from "react";
import {Link} from "react-router-dom";

const DetailsComponent = () => {
    const {pathname} = useLocation();
    const workID = pathname.split('/')[2];
    const {bookDetails} = useSelector((state) => state.details);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findBookByWorkIDThunk(workID));
    }, [workID]);
    console.log(bookDetails)
    return (
        <div>
            <Link to={"/home"}>
                <i className="fa-solid fa-lg fa-arrow-left"></i>
            </Link>
            <h1>Details</h1>
            {
                bookDetails.length !== 0 &&
                <div>
                    {bookDetails.title}
                    <br/>
                    {("covers" in bookDetails) &&
                        <img src={"https://covers.openlibrary.org/b/id/" + bookDetails.covers[0] + "-L.jpg"}/>}
                    <br/>
                    {("description" in bookDetails) ?
                        bookDetails.description :
                        "Description not available"}
                </div>
            }
            Create and display reviews here
        </div>
    )}
export default DetailsComponent;

