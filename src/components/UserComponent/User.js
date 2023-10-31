import React from 'react';
import {useNavigate} from "react-router-dom"

import css from "./Users.module.css"

const User = ({user}) => {

    const {id, name} = user;
    const navigate = useNavigate();
    const passId = () => {
        navigate(`../users/${id}`);
    }

    return (
        <div className={css.User}>
            <div>id: {id}</div>
            <div>name: {name}</div>
                <button onClick={() => {passId()}}>User info</button>
        </div>
    );
};

export {User};