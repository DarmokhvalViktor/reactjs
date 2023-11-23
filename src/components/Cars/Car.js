import {Component} from "react";

import css from "./Car.module.css"

class Car extends Component {
    render() {
        const {id, brand, year, price} = this.props.car;
        return (
            <div className={css.Car}>
                <div>id: {id}</div>
                <div>brand: {brand}</div>
                <div>year: {year}</div>
                <div>price: {price}</div>
            </div>
        )
    }
}

export {
    Car
}