import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import '../stylesDefault.css';

import Card from '../../components/Card';
import Axios from 'axios';

const People = () => {

    const [response, setResponse] = useState(null);

    useEffect(() => {
        api.get('/people')
            .then(response => {
                setResponse(response.data);
                console.log(response.data);
            })
            .catch(error => {
                alert(error);
            })
    }, [])

    function pagination(newPage){
        Axios.get(newPage)
        .then(response => {
            setResponse(response.data);
        }).catch(error=>{
            alert(error);
        })
    }

    return (
        <div className="container-main">

            {
                response === null ? "" :
                    <>
                        <div className="row">
                            {
                                response !== null ? response.results.map((person, i) => (
                                    i <= 4 ? <Card data={person} key={i} /> : ""
                                )) : ""
                            }
                        </div>

                        <div className="row">
                            {
                                response !== null ? response.results.map((person, i) => (
                                    i > 4 ? <Card data={person} key={i} /> : ""
                                )) : ""
                            }
                        </div>

                        <div className="row">
                            <button className="btn-pagination" disabled={response.previous !== null ? false : true} onClick={() => pagination(response.previous)}>Previous</button>
                            <button className="btn-pagination" disabled={response.next !== null ? false : true} onClick={() => pagination(response.next)}>Next</button>
                        </div>
                    </>
            }

        </div>
    )

}

export default People;