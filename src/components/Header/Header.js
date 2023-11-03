import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";

import css from "./Header.module.css"
import {useAppContext} from "../../hooks";
import {authService} from "../../services";

const Header = () => {
    const {isAuth, me, setMe, setIsAuth} = useAppContext();

    const navigate = useNavigate()

    const logout = () => {
        authService.deleteToken();
        setMe(null);
        setIsAuth(null);
        navigate("/login");
    }

    return (
        <div className={css.Header}>
            <h1>Cars</h1>
            {
                isAuth ?
                    <div>
                        {me.username}
                        <button onClick={logout}>Logout</button>
                    </div> :
                    <div>
                        <NavLink to={"login"}>Login</NavLink>
                        <NavLink to={"register"}>Register</NavLink>
                    </div>
            }

        </div>
    );
};

export {Header};