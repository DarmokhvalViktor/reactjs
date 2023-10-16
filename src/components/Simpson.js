import React from 'react';

import "./SimpsonStyle.css";

const Simpson = ({simpson}) => {
    const {fullName, age, occupation, gender, image} = simpson;
    console.log(fullName, age, occupation, gender)

    return (
        <div id={"mainSimpsonBlock"}>
            <div>
                <div>
                    <p> name: {fullName}</p>
                </div>
                <div>
                    <p> age: {age}</p>
                </div>
                <div>
                    <p> occupation: {occupation}</p>
                </div>
                <div>
                    <p> gender: {gender}</p>
                </div>
            </div>
            <div>
                <img src={image} alt={fullName} style={{width: 200}}/>
            </div>


        </div>
    );
};

export {Simpson};