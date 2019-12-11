import React, {useEffect} from 'react'
import {
    useParams
} from 'react-router-dom'
import {connect} from 'react-redux'

import {fetchBeers} from 'actions'
import {getBeers} from 'selectors'
function TextProba (props) {
    let {page} = useParams()
    useEffect(() => {
        props.fetchBeers(page)
        console.log(page)
    })
    return (
        <div>
            Number of this page is {page}
        </div>
    )
}

class Proba extends React.Component {
    render() {
        return (
            <TextProba fetchBeers={this.props.fetchBeers}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      beers: state.beers
    }
}

const mapDispatchToProps = {
    fetchBeers
}

export default connect(null,mapDispatchToProps)(Proba)