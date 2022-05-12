import { Navigate } from "react-router-dom";

const Protected = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
        return <Navigate to='/login' replace ></Navigate>
    }
    return children
}

export default Protected