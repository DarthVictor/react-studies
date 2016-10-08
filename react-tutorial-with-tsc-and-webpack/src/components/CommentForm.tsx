import * as React from "react";
import { CommentData } from "./CommentData";

interface CommentFormProps {
    onCommentSubmit(comment: CommentData): any
}

interface CommentFormState {
    author: string 
    text: string
}

export class CommentForm extends React.Component<CommentFormProps, CommentFormState> {
    constructor(){
        super();
        this.state = {
            author: '',
            text: ''
        }
    }

    handleAuthorChange(e: React.FormEvent){
        this.setState({
            author: (e.target as HTMLInputElement).value
        } as CommentFormState)
    }

    handleTextChange(e: React.FormEvent){
        this.setState({
            text: (e.target as HTMLInputElement).value
        } as CommentFormState)
    }

    handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        var author = this.state.author.trim();
        var text = this.state.text.trim();
        if (!text || !author) {
            return;
        }
        this.props.onCommentSubmit({id: null, author: author, text: text});
        //this.setState({author: '', text: ''});
    }

    render() {
        return (<div className="commentBox">
              <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
                <input
                     type="text" 
                     placeholder="Your name"
                     value={this.state.author}
                     onChange={this.handleAuthorChange.bind(this)} 
                />
                <input
                    type="text"
                    placeholder="Say something..."
                    value={this.state.text}
                    onChange={this.handleTextChange.bind(this)}
                />
                <input type="submit" value="Post" />
            </form>
      </div>);
    }
}