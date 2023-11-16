import {useSelector} from "react-redux";

import css from "./Header.module.css"
const Header = () => {

    const {episodeName} = useSelector(state => state.episodes);

    return (
        <div className={css.Header}>
            <h1>{episodeName ? `${episodeName}` : `Rick & Morty`}</h1>
        </div>
    );
};

export {Header};