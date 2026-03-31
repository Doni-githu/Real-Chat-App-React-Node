import { Link } from "react-router";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container d-flex justify-content-between">

                <Link className="navbar-brand fw-bold fs-3" to="/">
                    BookApp
                </Link>


                <div className="d-flex">
                    <ul className="navbar-nav d-flex">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/add" className="nav-link">
                                Add Book
                            </Link>
                        </li>
                    </ul>

                    <div className="d-flex gap-2">
                        <Link to="/login" className="btn btn-outline-light">
                            Login
                        </Link>

                        <Link to="/register" className="btn btn-primary">
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}