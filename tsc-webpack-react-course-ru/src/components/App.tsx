import * as React from 'react';
//export interface HelloProps { compiler: string; framework: string; }

export class App extends React.Component<{}, {}> {
    
    render() {
        const my_news: any[] = [
            {
                author: 'Саша Печкин',
                text: 'В четверг, четвертого числа...'
            },
            {
                author: 'Просто Вася',
                text: 'Считаю, что $ должен стоить 35 рублей!'
            },
            {
                author: 'Гость',
                text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
            }
        ]
        return (
            <div className="app">
                Всем привет, я компонент App! Я умею отображать новости.
                <News data={my_news} /> {/*добавили свойство data */}
                <Comments />
            </div>
        );
    }
}

export class News extends React.Component<{data: any}, {}>{
    render(){
        let newsTemplate: any;
        const data = this.props.data;
        if(this.props.data.length > 0){
            newsTemplate = this.props.data.map((item: any, index: number) => {
                    return (
                        <div key={index}>
                            <p className="news__author">{item.author}: </p>
                            <p className="news__text">{item.text}</p>
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
                <strong className={(data.length > 0 ? '':'none ') + 'news_total-news'}>Всего новостей: {data.length}</strong>
            </div>
        );
    }
}

export class Comments extends React.Component<{}, {}> {
    render() {
        return (
            <div className="comments">
                "Нет новостей - комментировать нечего."
            </div>
        );
    }
}