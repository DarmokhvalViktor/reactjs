import React, {useEffect, useState} from 'react';

import {userService} from "../../services/userService";
import {User} from "./User";
import css from "./Users.module.css"

const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])

    return (
        <div className={css.Users}>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};