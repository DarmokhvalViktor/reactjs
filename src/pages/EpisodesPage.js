import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {Episodes, Pagination} from "../components";
import {episodeActions} from "../redux";

const EpisodesPage = () => {

    const {errors} = useSelector(state => state.episodes)

    const dispatch = useDispatch();
    const [page2, setPage] = useSearchParams({page: "1"});
    const page = page2.get("page")

    useEffect(() => {
        dispatch(episodeActions.getAll({page}))
    }, [page, dispatch])

    return (
        <div>
            {errors && <h1>{JSON.stringify(errors)}</h1>}
            <Episodes/>
            <Pagination setPage={setPage}/>

        </div>
    );
};

export {EpisodesPage};