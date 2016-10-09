import * as React from 'react';
import {ArticleData} from './Article';
import {News, NewsProps} from './News';
//export interface HelloProps { compiler: string; framework: string; }

export class App extends React.Component<{}, {}> {
    
    render() {
        const my_news: ArticleData[] = [
            {
                author: 'Саша Печкин',
                text: 'В четчерг, четвертого числа...',
                bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
            },
            {
                author: 'Просто Вася',
                text: 'Считаю, что $ должен стоить 35 рублей!',
                bigText: 'А евро 42!'
            },
            {
                author: 'Гость',
                text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
                bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
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