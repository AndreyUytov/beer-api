import React from 'react'
import {Link, useRouteMatch} from 'react-router-dom'

export default class Nav extends React.Component {
    render () {
        return (
            <nav className="home-page__navigation">
                <ul>
                    <li>
                        <Link to='' className="navigation__link navigation__link--active">Главная</a>
                    </li>
                    <li>
                        <Link to='' href="#" className="navigation__link">
                            Избранное
                            <span className="link-items">0</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='' href="#" className="navigation__link">
                            Корзина
                            <span className="link-items">0</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}