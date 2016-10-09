import * as React from 'react';

export interface ArticleProps {data: ArticleData}
export interface ArticleState {
    visible: boolean
}

export interface ArticleData {
    author: string, 
    text: string, 
    bigText: string
}

export class Article extends React.Component<ArticleProps, ArticleState>{
    constructor(){
        super();
        this.state = {
            visible: false
        }
    }
    readmoreClick(e: Event) {
        e.preventDefault();
        this.setState({visible: true});
    }
    render(){       
        const author = this.props.data.author;
        const text = this.props.data.text;
        const bigText = this.props.data.bigText;

        const visible = this.state.visible;
        return (
                <div className='article'>
                    <p className="news__author">{author}: </p>
                    <p className="news__text">{text}</p>
                    <a href="#" 
                        onClick={this.readmoreClick.bind(this)}
                        className={'news__readmore' + (visible ? ' none': '')} >
                            Подробнее
                    </a>
                    <p className={'news__big-text' + (visible ? '': ' none')}>{bigText}</p>
                </div>
            )
    }
}