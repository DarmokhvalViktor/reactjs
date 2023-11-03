import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {carService} from "../../services";
import {Car} from "./Car";
import css from "./Cars.module.css"

const Cars = () => {

    const [cars, setCars] = useState([]);
    const [query, setQuery] = useSearchParams({page: "1"});
    const [prevNext, setPrevNext] = useState({prev: null, next: null})

    useEffect(() => {
        carService.getAll(query.get("page")).then(({data}) => {
            setCars(data.items);
            setPrevNext({prev: data.prev, next: data.next})
        })
    }, [query.get("page")])

    const prev = () => {
        setQuery(prev => {
            prev.set("page", `${+prev.get("page") - 1}`);
            return prev;
        })
    }

    const next = () => {
        setQuery(prev => {
            prev.set("page", `${+prev.get("page") + 1}`);
            return prev;
        })
    }

    return (
        <div>
            <div className={css.Cars}>
                {cars.map(car => <Car key={car.id} car={car}/>)}
                <hr/>
            </div>
            <button disabled={!prevNext.prev} onClick={prev}>Previous page</button>
            <button disabled={!prevNext.next} onClick={next}>Next page</button>
        </div>



    );
};

export {Cars};