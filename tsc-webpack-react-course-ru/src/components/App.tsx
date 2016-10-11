import * as React from 'react';
import {ArticleData} from './Article';
import {News, NewsProps} from './News';
import {Add} from './Add';

export interface AppState { news:  ArticleData[]}

export class App extends React.Component<{}, AppState> {
    constructor(){
        super();
        this.state = {
            news:  [
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
        (window as any).ee.addListener('News.add', (item: ArticleData[]) => {
            const nextNews = item.concat(this.state.news);
            this.setState({news: nextNews});
        });
    }
    
    componentWillUnmount() {
        (window as any).ee.removeListener('News.add');
    }

    render() {
        
        return (
            <div className="app">
                <h3>Новости</h3>
                <Add />
                <News data={this.state.news} />   
            </div>
        );
    }
}