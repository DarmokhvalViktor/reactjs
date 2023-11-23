import {Component} from "react";

import css from "./Cars.module.css"
import {carsService} from "../../services/carsService";
import {Car} from "./Car";

class Cars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars:[]
        }
    }

    componentDidMount() {
        carsService.getAllCars().then(({data}) => {
            this.setState({cars: data})
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div >
                <h1>Cars:</h1>
                <div className={css.Cars}>
                    {this.state.cars.map(car => <Car key={car.id} car={car}/>)}
                </div>
            </div>
        )
    }
}

export {
    Cars
}