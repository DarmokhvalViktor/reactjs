import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import {authService} from "../../services";
import {useAppContext} from "../../hooks";

const LoginForm = () => {

    const {register, handleSubmit} = useForm();
    const [serverError, setServerError] = useState(null);
    const navigate = useNavigate();
    const {setIsAuth, setMe} = useAppContext();

    const login = async (user) => {
        try {
            await authService.login(user);
            const {data} = await authService.me();
            setMe(data)
            setServerError(null);
            navigate("/cars");
            setIsAuth(user);
        } catch (e) {
            setServerError(e.response.data)
        }
    }

    return (
        <form onSubmit={handleSubmit(login)}>
            {serverError && <div>Username or password is incorrect</div>}
           <div>Username: <input type={"text"} {...register("username")}/></div>
           <div>Password: <input type={"text"} {...register("password")}/></div>
            <button>Login</button>
        </form>
    );
};

export {LoginForm};