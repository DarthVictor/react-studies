import * as React from 'react';
import {ArticleData} from './Article';
import {News, NewsProps} from './News';
import {Add} from './Add';

export interface AppState { my_news:  ArticleData[]}

export class App extends React.Component<{}, AppState> {
    constructor(){
        super();
        this.state = {
            my_news:  [
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
        };
    }
    
    componentDidMount() {
        /* Слушай событие "Создана новость"  если событие произошло, обнови this.state.news */

    }
    
    componentWillUnmount() {
        /* Больше не слушай событие "Создана новость" */

    }

    render() {
        
        return (
            <div className="app">
                <h3>Новости</h3>
                <Add />
                <News data={this.state.my_news} />   
            </div>
        );
    }
}