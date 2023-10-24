import React from 'react';

const User = ({user}) => {
    const {id, name, username, email, address, phone, website, company} = user
    return (
        <div>
            <div> id: {id}</div>
            <div> name: {name}</div>
            <div> username: {username}</div>
            <div> email: {email}</div>
            <div> address:
                <div> street: {address.street}</div>
                <div> suite: {address.suite}</div>
                <div> city: {address.city}</div>
                <div> zipcode: {address.zipcode}</div>
                <div> lat: {address.geo.lat}</div>
                <div> lng: {address.geo.lng}</div>
            </div>
            <div> phone: {phone}</div>
            <div> website: {website}</div>
            <div>company:
                <div> name: {company.name}</div>
                <div> catchPhrase: {company.catchPhrase}</div>
                <div> bs: {company.bs}</div>
            </div>

            <hr/>
        </div>
    );
};

export {User};