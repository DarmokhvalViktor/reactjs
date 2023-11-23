import {Posts} from "./components/Posts/Posts";
import {Comments} from "./components/Comments/Comments";
import {Cars} from "./components/Cars/Cars";

const App = () => {
    return (
        <div>
            <Posts/>
            <br/>
            <Comments/>
            <br/>
            <Cars/>
        </div>
    );
};

export {App};