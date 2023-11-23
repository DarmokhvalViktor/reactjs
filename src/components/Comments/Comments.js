import {Component} from "react";

import {jsonPlaceholderService} from "../../services/jsonPlaceholderService";
import css from "./Comments.module.css"
import {Comment} from "./Comment";

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments:[]
        }
    }

    componentDidMount() {
        jsonPlaceholderService.getAllComments().then(({data}) => {
            this.setState({comments: data})
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div >
                <h1>Comments:</h1>
                <div className={css.Comments}>
                    {this.state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
                </div>
            </div>
        )
    }
}

export {
    Comments
}