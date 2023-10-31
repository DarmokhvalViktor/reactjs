import React, {useEffect, useState} from 'react';
import {Outlet, useLocation} from "react-router-dom"

import {UserDetails} from "../components/UserComponent/UserDetails";
import {userService} from "../services/userService";

const UserDetailsPage = () => {

    const userId = useLocation().state.id;
    const [user, setUser] = useState({})
    useEffect(() => {
        userService.getById(userId).then(({data}) => setUser(data))
    }, [userId])

    return (
        <div>
            <UserDetails user={user}/>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};