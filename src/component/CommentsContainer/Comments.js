import React, {useEffect, useState} from 'react';

import {commentsService} from "../../services/commentsService";
import {Comment} from "./Comment";

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAllComments().then(({data}) => setComments(data))
    }, [])

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};