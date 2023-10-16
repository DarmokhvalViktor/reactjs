import React from 'react';

import {Simpson} from "./Simpson";
import "./SimpsonStyle.css";

const Simpsons = () => {
    const simpsons = [
        {id: 1, fullName: "Homer Simpson", age: 45, occupation: "Nuclear Plant inspector", gender: "male", image: "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"},
        {id: 2, fullName: "Marge Simpson", age: 42, occupation: "Housewife", gender: "female", image: "https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png"},
        {id: 3, fullName: "Bart Simpson", age: 10, occupation: "Pupil", gender: "male", image: "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"},
        {id: 4, fullName: "Lisa Simpson", age: 8, occupation: "Pupil", gender: "female", image: "https://upload.wikimedia.org/wikipedia/bs/thumb/e/ec/Lisa_Simpson.png/640px-Lisa_Simpson.png"},
        {id: 5, fullName: "Maggie Simpson", age: 1, occupation: "Infant", gender: "female", image: "https://images2.alphacoders.com/467/467171.jpg"},
    ]
    return (
        <div id={"allSimpsonsBlock"}>
            {simpsons.map(simpson => <Simpson simpson={simpson} key={simpson.id}/>)}
        </div>
    );
};

export {Simpsons};