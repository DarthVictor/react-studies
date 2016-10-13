import * as React from 'react'
interface PageProps {
    year: number,
    photos: string[]
}

export default class Page extends React.Component<PageProps, {}> {
    render() {
        return <div>
             <p>You have {this.props.photos.length} fotos in {this.props.year} year</p>
        </div>
    }
}