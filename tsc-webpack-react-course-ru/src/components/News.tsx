import * as React from 'react';
import {Article, ArticleProps} from './Article';

export interface NewsProps {data: any}
export interface NewsState {clicks: number}
export class News extends React.Component<NewsProps, NewsState>{
    constructor(){
        super();
        this.state = {
            clicks: 0
        }
    }
    addClick(){
        this.setState({
            clicks: this.state.clicks + 1
        })
    }
    render(){
        let newsTemplate: any;
        const data = this.props.data;
        if(this.props.data.length > 0){
            newsTemplate = this.props.data.map((item: any, index: number) => {
                    return (
                        <div key={index}>
                            <Article data={item} />
                        </div>
                    )
            })        
        }
        else{
            newsTemplate = <p>К сожалению новостей нет</p>
        }
        return (
            <div className="news">
                {newsTemplate}
                <strong className={(data.length > 0 ? '':'none ') + 'news__count'}>
                    Всего новостей: {data.length}
                </strong>
                <strong className='clicks__count' onClick={this.addClick.bind(this)}>
                    Всего кликов: {this.state.clicks}
                </strong>
            </div>
        );
    }
}
 
