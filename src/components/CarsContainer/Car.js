import React from 'react';

import css from "./Car.module.css"

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    return (
        <div className={css.Car}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
        </div>
    );
};

export {Car};