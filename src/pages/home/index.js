import React, { useState, useEffect } from 'react';

import './styles.css'
import DarthVader from '../../images/darth-vader.png'
import api from '../../services/api'

import { FaInstagram } from 'react-icons/fa';
import { FiTwitter, FiFacebook, FiFilm } from 'react-icons/fi'
import { BsArrowRight } from "react-icons/bs";

const Home = () => {

    const [planet, setPlanet] = useState({});
    const [films, setFilms] = useState([]);

    useEffect(() => {
        api.get("/planets/1/")
            .then(response => {
                const planetResponse = response.data;
                planetResponse.nFilms = response.data.films.length;
                setPlanet(planetResponse);
            }).catch(error => {
                alert(error)
            })

        api.get("/films")
            .then(response => {
                setFilms(response.data.results);
            }).catch(error => {
                alert(error)
            })

    }, []);

    return (
        <div className="container-home">
            <div className="sidebar">
                <FaInstagram className="icon-media" size={"4vh"} />
                <FiTwitter className="icon-media" size={"4vh"} />
                <FiFacebook className="icon-media" size={"5vh"} />
            </div>

            <div className="container-content">
                <div className="row-content">
                    <h4>PRINCIPAIS PLANETAS DA SAGA</h4>
                    <h1> #1 Primeiro Planeta: {planet.name} </h1>
                    <p>Sendo considerado um dos planetas mais importantes da saga,  {planet.name} aparece
                    em {planet.nFilms} filmes e tem cerca de {planet.population} habitantes.</p>
                </div>

                <div className="row-content">
                    <h4>SAIBA MAIS SOBRE</h4>
                    <img src="https://wallpaperplay.com/walls/full/3/2/4/219699.jpg" alt="" className="image-card" />
                    <BsArrowRight className="btn-arrow" size={"2vw"} style={{ marginTop: "-4vh", marginLeft: "-2vw" }} />
                    <p style={{ marginTop: "8px" }}>Millennium Falcon</p>
                </div>

            </div>
            <div className="container-img-bg">
                <img src={DarthVader} className="img-big" alt="" />
            </div>
            <div className="side-infos">
                <h4><FiFilm /> FILMES</h4>
                {
                    films.map((film, i) => (
                        <div className="info" key={i}>
                            <p style={{ marginTop: 0 }}>{film.release_date}</p>
                            <h4> {film.title} </h4>
                            <BsArrowRight className="btn-arrow btn-outline" size={"2vw"} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home;