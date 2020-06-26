import React from 'react';

import '../Card/styles.css';

import { BsArrowRight } from "react-icons/bs";

const Card = (props) => {

    return(
        <div className="container-card">
            <h1>{props.data.name}</h1>
            <h4>Gender: {props.data.gender}</h4>
            <h4>Birth Year: {props.data.birth_year}</h4>
            <h4>Mass: {props.data.mass}</h4>
            <h4>Height: {props.data.height}</h4>
            <BsArrowRight className="btn-arrow" size={"2vw"} />
        </div>
    )

}

export default Card;