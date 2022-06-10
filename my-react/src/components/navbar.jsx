import React from 'react';

const NavBar = (props) => {
    return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">
                    Item Count{" "}
                    <span className="badge badge-pill badge-secondary">
                        {props.totalCounters}
                    </span>
                </a>
            </div>
        </nav>
    );
}
 
export default NavBar;