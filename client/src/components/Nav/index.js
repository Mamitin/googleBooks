import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/">Google Book Search</Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className={window.location.pathname === "/" 
                            ? "nav-link active":"nav-link"}>Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/saved" className={window.location.pathname === "/saved"
                            ? "nav-link active":"nav-link"}>Saved</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;