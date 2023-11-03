import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useNavigate} from "react-router-dom"

import {registerValidator} from "../../validators";
import {authService} from "../../services";

const RegisterForm = () => {

    const {register, reset, handleSubmit, formState: {errors, isValid}} = useForm({
        mode: "onBlur",
        resolver: joiResolver(registerValidator)
    });
    const [serverError, seteServerError] = useState(null);
    const navigate = useNavigate();

    const save = async (user) => {
        try {
            await authService.register(user);
            seteServerError(null);
            navigate("/login");
        } catch (e) {
            seteServerError(e.response.data);
        }
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <div>Username: <input type={"text"} {...register("username")}/></div>
            {errors.username && <div>{errors.username.message}</div>}
            {serverError && <div>Username already exists</div>}
            <div>Password: <input type={"text"} {...register("password")}/></div>
            {errors.password && <div>{errors.password.message}</div>}
            <div>ConfirmPassword: <input type={"text"} {...register("re_password")}/></div>
            {errors.re_password && <div>{errors.re_password.message}</div>}
            <button disabled={!isValid}>Register</button>
        </form>
    );
};

export {RegisterForm};