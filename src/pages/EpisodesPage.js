import React, {useEffect} from 'react';

import {Episodes} from "../components";
import {useChapter} from "../hooks";

const EpisodesPage = () => {

    const {setChapter} = useChapter()

    useEffect(() => {
        setChapter(null)
    })

    return (
        <div>
            <Episodes/>
        </div>
    );
};

export {EpisodesPage};