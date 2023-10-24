import React, {useEffect, useState} from 'react';

import {userService} from "../../services/userService";
import {UsersForm} from "./UsersForm";
import {Users} from "./Users";

const UserContainer = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data));
    }, [])
    return (
        <div>
            <UsersForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>
        </div>
    );
};

export {UserContainer};