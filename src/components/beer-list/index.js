import React from 'react'
import {connect} from 'react-redux'

import {fetchBeers, fetchLoadMoreBeers} from 'actions'
import {getBeers} from 'selectors'

function BeerItem (props) {
    return ( props.beers.length &&
        props.beers.map((elem) => {
            return (
                <li className="beer-item" key={elem.id}>
                    <img src={elem.image_url} width="200" height="500"/>
                    <div className="beer-item__wrapper">
                        <h3 className="beer-item__title">{elem.name}</h3>
                        <p className="beer-item__description">
                            {elem.description.slice(0,45) + '...'}
                        </p>
                        <a className="beer-item__link button" type="button" href="#">Подробнее</a>
                        <button className="beer-item__favotite-btn button" type="button">
                            <span className="visually-hidden">
                                Добавить в избранное
                            </span>
                        </button>
                        <button className="beer-item__buy-btn button" type="button">Добавить в корзину</button>
                    </div>
                </li>
            )
        })
    )
}

export class BeerList extends React.Component {
    state = {
        page: 2
    }
    onLoadMoreClick = () => {
        this.props.fetchLoadMoreBeers(this.state.page);
        this.setState((state) => ({
            page: state.page + 1
        }));

    }

    componentDidMount () {
        // this.props.fetchBeers()
    }
    render () {
        return (
            <section className="main__beer-section">
                <ul className="beer-list">
                    <BeerItem beers={this.props.beers} />
                </ul>
                <button className='button button-load-more' 
                onClick={this.onLoadMoreClick}  >
                    Загрузить еще
                </button>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      beers: getBeers(state)
    }
}

const mapDispatchToProps = {
    fetchBeers,
    fetchLoadMoreBeers
}


function reformatingRed (arr) {
    return arr.reduce((res, cur) => {
        return res.set(cur.id, cur)
    }, new Map())
}

const stable = {}

const arr = [{id:'one',name:'One'}, {id:'two',name:'Two'}]

console.log(reformatingRed(arr))



export default connect(mapStateToProps,mapDispatchToProps)(BeerList)