import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="text-center">

                <h1 > 404 - Not Found</h1>
                <p > Sorry, the page you're looking for does not exist.  Please click <Link to="/"> here</Link> to return to the homepage.</p>
            </div>
        </div>
    )
};

export default NotFound;