import React from 'react'
import {connect} from 'react-redux'

import Template from 'components/template'

function Home (props) {
    return (
        <Template {...props}>
            {props.beers.beers}
        </Template>
    )
}

const mapStateToProps = (store) => {
    return {
        beers: store.beers
    }
}

export default connect(mapStateToProps)(Home)