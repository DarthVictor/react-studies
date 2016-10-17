import * as React from 'react'
import {PageActions, PageActionsProps} from '../actions/PageActions'
import {PageState} from '../types'

type PageProps = PageState & PageActionsProps

export default class Page extends React.Component<PageProps, {}> {
    onYearBtnClick(e: Event) {
        this.props.getPhotos(Number( (e.target as HTMLElement).textContent) )
    }
    componentWillMount(){
        this.props.getPhotos(this.props.year )
    }
    render() {
        const { year, photos, fetching, error } = this.props;
        const onYearBtnClick = this.onYearBtnClick.bind(this)
        const years = [2016,2015,2014,2013,2012,2011,2010]

        return <div className='ib page'>
                    <p>
                        { years.map((item,index) => <button className='btn' key={index} onClick={onYearBtnClick}>{item}</button> )}
                    </p>
                    <h3>{year} год [{photos.length}]</h3>
                { error ? <p className='error'> Во время загрузки фото произошла ошибка</p> : ''  }
                { fetching ?  <p>Загрузка...</p>
                           :  photos.map((entry: any, index: number) =>
                                    <div key={index} className='photo'>
                                        <p><img src={entry.src} /></p>
                                        <p>{entry.likes.count} ❤</p>
                                    </div>
                                )
                }
            </div>
    }
}