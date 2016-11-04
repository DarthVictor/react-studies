import * as React from 'react'

type DataArray = Array<{index: number, text:string}>

export class AsyncComponent extends React.Component<{}, {data: DataArray}> {
    
    private async fetchData(){
        let req = await fetch('https://jsonplaceholder.typicode.com/posts') 
        let json = req.json();
        return json
    } 

    private async mapData(): Promise<DataArray>{    
        return (await this.fetchData()).map((item: any, id: number) => ({
            text: (id + 1) + '. ' + item.title,
            index: id
        })) 
    }

    constructor(){
        super()
        this.state = {data: []};
    }
    componentDidMount(){
        this.mapData().then(data => this.setState({data}))
    }
    renderListItems(){
        return this.state.data.map((item) => <li key={item.index}>{item.text}</li>)
    }
    render() {
        if(this.state.data.length > 0){
            return <ul>
                {this.renderListItems()}
            </ul>
        }
        else{
            return <p>Loading</p>
        }
    }
}