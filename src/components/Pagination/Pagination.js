import {useSelector} from "react-redux";

const Pagination = ({setPage}) => {

    const {next, previous} = useSelector(state => state.episodes)

    const previousPage = () => {
        setPage(prev => {
            prev.set("page", `${+prev.get("page") - 1}`);
            return prev;
        })
    }
    const nextPage = () => {
        setPage(prev => {
            prev.set("page", `${+prev.get("page") + 1}`);
            return prev;
        })
    }

    return (
        <div>
            <button disabled={!previous} onClick={previousPage}>Previous page</button>
            <button disabled={!next} onClick={nextPage}>Next page</button>
        </div>
    );
};

export {Pagination};