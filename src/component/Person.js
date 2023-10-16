import React from 'react';

import "./PersonStyle.css"

const Person = ({person}) => {
    const {name, status, species, gender, image} = person;
    return (
        <div id={"mainPersonBlock"}>
            <div>
                <div>
                    <p>name: {name}</p>
                </div>
                <div>
                    <p>status: {status}</p>
                </div>
                <div>
                    <p>species: {species}</p>
                </div>
                <div>
                    <p>gender: {gender}</p>
                </div>
            </div>
            <div>
                <img src={image} alt={name} style={{width: 200}}/>
            </div>

        </div>
    );
};

export {Person};