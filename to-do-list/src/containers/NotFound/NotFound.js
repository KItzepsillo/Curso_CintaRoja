import React from 'react'
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="d-flex flex-column align-items-center">
            <h1>404</h1>
            <h2>NotFound</h2>  
            <Link className="btn-primary" to="/" role="button">Volver al inicio</Link>
        </div>
    )
}

export default NotFound
