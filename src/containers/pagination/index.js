import React from 'react'
import {connect} from 'react-redux'

import PaginationItem from 'components/pagination-item'

class Pagination extends Component {
    
    render () {
        return (
            <ul className="beer-pagination">
                
            </ul>
        )
    }
}

export default connect()(Pagination)