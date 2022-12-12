import {useSelector} from "react-redux";
import {Navigate, useNavigate} from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const navigate = useNavigate();
    const {currentUser} = useSelector((state) => state.users);
    console.log("Protected route: checking if curr user exists");
    console.log(currentUser);
    if (currentUser) {
        return children;
    }
    else {
        return (
            <Navigate to={'/login'}/>
        )
    }
}
export default ProtectedRoute