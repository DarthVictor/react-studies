import * as React from 'react';
import {Article, ArticleProps} from './Article';

export interface NewsProps {data: any}
export class News extends React.Component<NewsProps, {}>{
    constructor(){
        super();
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
            </div>
        );
    }
}
 
