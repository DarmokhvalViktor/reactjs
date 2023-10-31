import React from 'react';
import {useLoaderData} from "react-router-dom"

import {Users} from "../components/UserComponent/Users";

const UsersPage = () => {

    const {data} = useLoaderData();
    
    return (
        <div>
            <Users users={data}/>
        </div>
    );
};

export {UsersPage};