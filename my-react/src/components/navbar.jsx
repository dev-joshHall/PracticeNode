import React from 'react';

const NavBar = (props) => {
    console.log("hello")
    return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">
                    Cart{" "}
                    <span className="badge badge-pill badge-secondary">
                        {props.totalCounters}
                    </span>
                </a>
            </div>
        </nav>
    );
}
 
export default NavBar;