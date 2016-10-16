import * as React from 'react'
import {PageActions, PageActionsProps} from '../actions/PageActions'

interface PageStateProps {
    year: number,
    photos: string[]
}
type PageProps = PageStateProps & PageActionsProps

export default class Page extends React.Component<PageProps, {}> {
    onYearBtnClick(e: Event) {
        this.props.setYear(Number( (e.target as HTMLElement).textContent) )
    }
    render() {
        const { year, photos } = this.props;
        const onYearBtnClick = this.onYearBtnClick.bind(this)
        return <div>
            <p>
                <button onClick={onYearBtnClick}>2016</button>
                <button onClick={onYearBtnClick}>2015</button>
                <button onClick={onYearBtnClick}>2014</button>
            </p>
            <h3>{year} год</h3>
            <p>You have {photos.length} fotos</p>
        </div>
    }
}