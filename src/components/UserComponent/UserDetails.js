import React from 'react';
import {useNavigate} from "react-router-dom";

import css from "./UserDetails.module.css"

const UserDetails = ({user}) => {

    const {id, name, username, email, phone, website} = user;

    const navigate = useNavigate();
    const toPosts = () => {
        navigate("user-posts");
    }

    return (
        <div className={css.UserDetails}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            <button onClick={() => {toPosts()}}>Posts of current user:</button>
        </div>
    );
};

export {UserDetails};