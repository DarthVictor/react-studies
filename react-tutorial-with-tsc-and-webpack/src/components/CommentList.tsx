import * as React from "react";
import { Comment } from "./Comment";
import { CommentData } from "./CommentData";

export interface CommentListProps {
    data: Array<CommentData>
}

export class CommentList extends React.Component<CommentListProps , {}> {
    render() {
        const commentNodes = this.props.data.map(comment => {
            return (
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            )
        })
        return <div className="commentList">
            {commentNodes}
        </div>;
    }
}