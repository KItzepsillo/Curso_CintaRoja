import React from 'react';
import {NavLink} from 'react-router-dom';
//NavLink unicamente para nuestra Nav

const AppNav = () => {
    return (
        // SPA => Single Page App
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <NavLink className = "nav-link" activeClassName="disable" to="/">To-do-list</NavLink>
            {/*<a className="navbar-brand" href="/#">TO-DO-LIST</a>*/}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink className = "nav-link" activeClassName="disable" to="/add-task">Agregar Tarea</NavLink>
                        {/*<a className="nav-link" href="/add-task">Nueva Tarea <span class="sr-only">(current)</span></a>*/}
                    </li>
                    <li className="nav-item">
                        <NavLink className = "nav-link" activeClassName="disable" to="/about">Sobre el proyecto</NavLink>
                    </li>
                </ul>
            </div>
        </nav>

    )
}
export default AppNav;
