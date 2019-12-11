import React from 'react'
import {Link, useRouteMatch} from 'react-router-dom'

function PageLink (props) {
    let match = useRouteMatch({
        path: props.to
    });
    
    return (
        <li className="beer-pagination__item">
            <Link to={props.to} className={match ? "pagination-link pagination-link--active" : "pagination-link"}>
              {props.pageNumber}
            </Link>
        </li>
    )
}
export default class Pagination extends React.Component {
    render () {
        return (
            <ul className="beer-pagination">
                <PageLink key={1} pageNumber='1' to='/pages/1'/>
                <PageLink key={2} pageNumber='2' to='/pages/2'/>
                <PageLink key={3} pageNumber='3' to='/pages/3'/>
            </ul>
        )
    }
}