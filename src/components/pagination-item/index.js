import React, {Component} from 'react'


export default class PaginationItem extends Component {
    render () {
        return (
            <li className="beer-pagination__item">
                <a className="pagination-link pagination-link--active" href="#">1</a>
            </li>
        )
    }
}
