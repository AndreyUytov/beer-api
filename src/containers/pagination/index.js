import React from 'react'
import {Link, useRouteMatch} from 'react-router-dom'
import {connect} from 'react-redux'

function PageLink (props) {
    let match = useRouteMatch({
        path: props.to
    });
    
    return (
        <li className="beer-pagination__item">
            <Link to={props.pageNumber} className={match ? "pagination-link pagination-link--active" : "pagination-link"}>
              {props.pageNumber}
            </Link>
        </li>
    )
}
export default class Pagination extends React.Component {
    render () {
        return (
            <ul className="beer-pagination">
                <PageLink key={1} pageNumber='1' />
                <PageLink key={2} pageNumber='2' />
                <PageLink key={3} pageNumber='3' />
            </ul>
        )
    }
}

