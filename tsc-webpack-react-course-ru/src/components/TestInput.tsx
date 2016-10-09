import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface TestInputState {
    myValue: string
} 
export class TestInput extends React.Component<{}, TestInputState> {
    constructor (){
        super();
        
    }
    refs: {
        [key: string]: (Element);
        myTestInput: (HTMLInputElement);
    }
    onSubmitInput(e: Event){
        const el = ReactDOM.findDOMNode(this.refs.myTestInput) as HTMLInputElement
        alert(el.value)
        e.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.onSubmitInput.bind(this)}>
                <input type="text"
                    className='test-input' 
                    defaultValue=""
                    placeholder='введите значение' 
                    ref='myTestInput'
                />
                <button type="submit" >
                OK
                </button>
            </form>
        )
    }
}