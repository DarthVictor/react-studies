import * as React from "react";
declare const require: any;
const remarkable = require('remarkable');

export interface CommentProps {
    author: string;
    children?: any;
}

export class Comment extends React.Component<CommentProps, {}> {
    rawMarkup(){
        var md = new remarkable();
        var rawMarkup = md.render(this.props.children.toString());
        return { 
            __html: rawMarkup 
        };
    }
    render() {
        return (
        <div className="comment">
            <h2 className="commentAuthor">
                {this.props.author}
            </h2>
            <span dangerouslySetInnerHTML={this.rawMarkup()} />
        </div>
        );
    }
}