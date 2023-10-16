// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
//     https://rickandmortyapi.com/api/character
//         Створити 6 персонажів
import React, {useEffect, useState} from 'react';
import {Person} from "./Person";

const Persons = () => {
    const personArray = [
        {id: 1, name: "Rick Sanchez", status: "Alive", species: "Human", gender: "Male", image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"},
        {id: 2, name: "Morty Smith", status: "Alive", species: "Human", gender: "Male", image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"},
        {id: 3, name: "Summer Smith", status: "Alive", species: "Human", gender: "Female", image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"},
        {id: 4, name: "Beth Smith", status: "Alive", species: "Human", gender: "Female", image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg"},
        {id: 6, name: "Abadango Cluster Princess", status: "Alive", species: "Alien", gender: "Female", image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg"},
        {id: 7, name: "Abradolf Lincler", status: "unknown", species: "Human", gender: "Male", image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg"},
    ]

    const [species, setSpecies] = useState([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/[1, 2, 3, 4, 5, 6, 7, 9, 10]").then(value => value.json()).then(value => setSpecies(value))
    }, [])
    console.log(species)

    //first iterates with hardcoded array, second, not commented - with fetch
    return (
        <div id={"allPersonsBlock"}>
            {/*{personArray.map(person => <Person person={person} key={person.id}/>)}*/}
            {species.map(person => <Person person={person} key={person.id}/>)}
        </div>
    );
};

export {Persons};