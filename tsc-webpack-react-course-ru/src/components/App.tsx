import * as React from 'react';
//export interface HelloProps { compiler: string; framework: string; }

export class App extends React.Component<{}, {}> {
    
    render() {
        const my_news = [
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
        return (
            <div className="news">
                К сожалению, новостей нет.
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