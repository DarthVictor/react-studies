import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface AddState {
    agreeNotChecked?: boolean
    authorIsEmpty?: boolean,
    textIsEmpty?: boolean
} 
export class Add extends React.Component<{}, AddState> {
    constructor (){
        super();
        this.state = {
            agreeNotChecked: true,
            authorIsEmpty: true,
            textIsEmpty: true
        }
    }
    componentDidMount(){
        const el = ReactDOM.findDOMNode(this.refs.author) as HTMLInputElement
        el.focus();
    }
    onSubmitInput(e: Event){
        e.preventDefault();
        const textEl = ReactDOM.findDOMNode(this.refs.text) as HTMLInputElement
        const authorEl = ReactDOM.findDOMNode(this.refs.author) as HTMLInputElement
        const author = authorEl.value;
        const text = textEl.value;
        const item = [{
            author: author,
            text: text,
            bigText: '...'
        }];
        (window as any).ee.emit('News.add', item);
        textEl.value = '';
        this.setState({textIsEmpty: true});
    }
    onCheckRuleClick(e: Event) {
        this.setState({agreeNotChecked: !this.state.agreeNotChecked}); //устанавливаем значени е в state
    }
    onFieldChange(fieldName: string){
        const text = (ReactDOM.findDOMNode(this.refs[fieldName]) as HTMLInputElement).value;
        let state: any = {};
        state[fieldName + 'IsEmpty'] = (text.trim() === '');
        this.setState(state)
    }

    refs: {
        [key: string]: (Element),
        author: (HTMLInputElement),
        text: (HTMLInputElement),
        checkrule: (HTMLInputElement),
        alert_button: (HTMLInputElement)
    }

    render(){
        return (
            <form className='add cf' onSubmit={this.onSubmitInput.bind(this)}>
                <input
                    type='text'
                    className='add__author'
                    defaultValue=''
                    placeholder='Ваше имя'
                    ref='author'
                    onChange={this.onFieldChange.bind(this, 'author')}
                    />
                <textarea
                    className='add__text'
                    defaultValue=''
                    placeholder='Текст новости'
                    ref='text'
                    onChange={this.onFieldChange.bind(this, 'text')}
                ></textarea>
                <label className='add__checkrule'>
                    <input type='checkbox' 
                        defaultChecked={false} 
                        onChange={this.onCheckRuleClick.bind(this)}
                        ref='checkrule' />Я согласен с правилами
                </label>
                <button 
                    className='add__btn' 
                    type='submit'
                    ref='alert_button'
                    disabled={this.state.agreeNotChecked || this.state.authorIsEmpty || this.state.textIsEmpty}
                >
                    Показать alert
                </button>
            </form>  
        )
    }
}