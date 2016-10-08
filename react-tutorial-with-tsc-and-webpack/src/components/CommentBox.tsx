import * as React from "react";

import { CommentList } from "./CommentList";
import { CommentForm } from "./CommentForm";
import { CommentData } from "./CommentData";

export interface CommentBoxProps {
    url: string,
    pollInterval: number
}
export interface CommentBoxState {
    data?: Array<CommentData>,
}

export class CommentBox extends React.Component<CommentBoxProps, CommentBoxState> {
    constructor() {
        super();
        this.state = {
            data: new Array<CommentData>()
        };
    }
    
    private loadCommentsFromServer(){
        window.fetch(
            this.props.url, 
            { cache: 'no-cache' }
        )
        .then(res => res.json())
        .then((data: Array<CommentData>)  => {
            this.setState({data: data});
        })
        .catch((error: any) => {
            console.error(error);
        })
    }

    handleCommentSubmit (comment: CommentData) {
        const comments = this.state.data;
        comment.id = Date.now();
        const newComments = comments.concat([comment]);
        this.setState({data: newComments});
        let options: RequestInit = { 
            method: 'POST',
            headers: {  
                  "Content-type": "application/json"  
            }, 
            body: JSON.stringify(comment)
        }
        window.fetch(
            this.props.url, 
            options
        )
        .then(res => res.json())
        .then((data: Array<CommentData>)  => {
            this.setState({data: data});
        })
        .catch((error: any) => {
            this.setState({data: comments});
            console.error(error);
        })
    }

    componentDidMount() {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
    }

    render() {
        return(
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data}/>
                <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)}/>
            </div>
        ) ;
    }
}