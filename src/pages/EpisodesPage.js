import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom"

import {Episodes} from "../components/EpisodesContainer";
import {episodeService} from "../services";
import {useAppContext} from "../hooks";

const EpisodesPage = () => {

    const [query, setQuery] = useSearchParams({page: "1"});

    const [episodes, setEpisodes] = useState([]);
    const [prevNext, setPrevNext] = useState({previous: null, next: null})
    const {setEpisodeTitle} = useAppContext();

    useEffect(() => {
        setEpisodeTitle(null)
    }, [query])

    useEffect(() => {
        episodeService.getAll(query.get('page')).then(({data}) => {
            setEpisodes(data)
            setPrevNext({previous: data.info.prev, next: data.info.next})
        })
    }, [query.get("page"), query])

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
            {episodes && <Episodes episodes={episodes.results}/>}
            <hr/>
            <button disabled={!prevNext.previous} onClick={prev}>PreviousPage</button>
            <button disabled={!prevNext.next} onClick={next}>NextPage</button>
        </div>
    );
};

export {EpisodesPage};