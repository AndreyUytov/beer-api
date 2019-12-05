import React from 'react'
import {Link, useRouteMatch} from 'react-router-dom'

function MenuLink (props) {
    let match = useRouteMatch({
        path: props.to,
        exact: props.exact
    });
    return (
        <li>
            <Link className={match ? "navigation__link navigation__link--active" : "navigation__link"} to={props.to}>
                {props.label}
                {props.children}
            </Link>
        </li>
    )
}
export default class Nav extends React.Component {
    render () {
        return (
            <nav className="home-page__navigation">
                <ul>
                    <MenuLink exact={true} to='/' label='Главная'/>
                    <MenuLink to='/favorites' label='Избранное'>
                        <span className="link-items">0</span>
                    </MenuLink>
                    <MenuLink to='/cart' label='корзина'>
                        <span className="link-items">0</span>
                    </MenuLink>
                </ul>
            </nav>
        )
    }
}