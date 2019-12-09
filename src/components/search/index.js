import React from 'react'

export default class Search extends React.Component {

    render() {
        return (
            <section className="main__search">
                <input className="search__input" type="text" placeholder="Искать продукт" />
                <button className="search__button button" type="button">Искать</button>
            </section>
        )
    }
}