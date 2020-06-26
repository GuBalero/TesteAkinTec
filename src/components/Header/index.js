import React, { useState, useEffect } from 'react';

import '../Header/styles.css';
import Logo from '../../images/logo.png'

const Header = (props) => {

    const [page, setPage] = useState(null);
    const [path, setPath] = useState(null);

    useEffect(() => {
        setPath(window.location.pathname);
    }, [])

    useEffect(() => {
        if (page !== null) window.location.assign("/" + page);
        setPath(window.location.pathname);
    }, [page])

    return (
        <div className="container-nav">
            <img alt="" src={Logo} height="75%" onClick={() => setPage("")} style={{cursor: "pointer"}} />
            <div className="buttons">

                <button onClick={() => setPage("people")} style={path === "/people" ? {borderBottom: "1.5px solid #F23005"} : {}}>Pessoas</button>
                <button onClick={() => setPage("films")} style={path === "/films" ? {borderBottom: "1.5px solid #F23005"} : {}}>Filmes</button>
                <button onClick={() => setPage("starships")} style={path === "/starships" ? {borderBottom: "1.5px solid #F23005"} : {}}>Starships</button>
                <button onClick={() => setPage("vehicles")} style={path === "/vehicles" ? {borderBottom: "1.5px solid #F23005"} : {}}>Veículos</button>
                <button onClick={() => setPage("species")} style={path === "/species" ? {borderBottom: "1.5px solid #F23005"} : {}}>Espécies</button>
                <button onClick={() => setPage("planets")} style={path === "/planets" ? {borderBottom: "1.5px solid #F23005"} : {}}>Planetas</button>

            </div>
        </div>
    )

}

export default Header;