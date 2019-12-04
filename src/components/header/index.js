import React from 'react'

export default class Header extends React.Component {
    render () {
        return (
            <header className="home-page__header">
                <div className="header__wrapper container">
                    <h1 className="home-page__title">
                        Может beer?
                    </h1>
                    <Nav {...this.props} />
                </div>
            </header>
        )
    }
}