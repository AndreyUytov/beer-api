import React, {Component} from 'react'

class PaginationItem extends Component{
    render () {
        return (
            <li class="beer-pagination__item">
                <a class="pagination-link pagination-link--active" href="#">1</a>
            </li>
        )
    }
}

export default class Pagination extends Component {
    render () {
        return (
            <ul className="beer-pagination">
                
            </ul>
        )
    }
}