import React from 'react';

import {User} from "./User";
import css from "./Users.module.css"

const Users = ({users}) => {

    return (
        <div className={css.Users}>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};