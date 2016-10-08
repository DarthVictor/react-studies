import * as React from 'react';
//export interface HelloProps { compiler: string; framework: string; }

export class App extends React.Component<{}, {}> {
    
    render() {
        const my_news: ArticleData[] = [
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
                <h3>Новости</h3>
                <News data={my_news} /> {/*добавили свойство data */}
                {/*<Comments /> */}
            </div>
        );
    }
}

export interface NewsProps {data: any}
export class News extends React.Component<NewsProps, {}>{
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
                <strong className={(data.length > 0 ? '':'none ') + 'news__count'}>Всего новостей: {data.length}</strong>
            </div>
        );
    }
}

// export class Comments extends React.Component<{}, {}> {
//     render() {
//         return (
//             <div className="comments">
//                 "Нет новостей - комментировать нечего."
//             </div>
//         );
//     }
// }

export interface ArticleProps {data: {author: string, text: string}}
export interface ArticleData {author: string, text: string}

export class Article extends React.Component<ArticleProps, {}>{
    render(){
        const author = this.props.data.author,
            text = this.props.data.text;
        return (
                <div className='article'>
                    <p className="news__author">{author}: </p>
                    <p className="news__text">{text}</p>
                </div>
            )
    }
}