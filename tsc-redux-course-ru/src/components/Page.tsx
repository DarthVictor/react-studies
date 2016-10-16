import * as React from 'react'
import {PageActions, PageActionsProps} from '../actions/PageActions'
import {PageState} from '../types'

type PageProps = PageState & PageActionsProps

export default class Page extends React.Component<PageProps, {}> {
    onYearBtnClick(e: Event) {
        this.props.getPhotos(Number( (e.target as HTMLElement).textContent) )
    }
    render() {
        const { year, photos, fetching } = this.props;
        const onYearBtnClick = this.onYearBtnClick.bind(this)
        return <div className='ib page'>
            <p>
            <button className='btn' onClick={onYearBtnClick}>2016</button>{' '}
            <button className='btn' onClick={onYearBtnClick}>2015</button>{' '}
            <button className='btn' onClick={onYearBtnClick}>2014</button>
            </p>
            <h3>{year} год</h3>
            {
                fetching ?
                    <p>Загрузка...</p>
                :
                    <p>У тебя {photos.length} фото.</p>
            }
            </div>
    }
}