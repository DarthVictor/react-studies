import * as React from 'react';

export interface TestInputState {
    myValue: string
} 
export class TestInput extends React.Component<{}, TestInputState> {
    constructor (){
        super();
        this.state = {
            myValue: ''
        }
    }

    onChangeInput(e: Event){
        const target  = e.target as HTMLSelectElement;
        this.setState({
            myValue: target.value
        })
    }

    onSubmitInput(e: Event){
        alert(this.state.myValue)
        e.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.onSubmitInput.bind(this)}>
                <input type="text"
                    className='test-input' 
                    value={this.state.myValue}
                    onChange={this.onChangeInput.bind(this)}
                    placeholder='введите значение' 
                />
                <button type="submit" >
                OK
                </button>
            </form>
        )
    }
}