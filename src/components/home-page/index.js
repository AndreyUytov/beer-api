import React from 'react'
import {connect} from 'react-redux'

import Template from 'components/template'
import BeerList from 'components/beer-list'

function Home (props) {
    return (
        <Template {...props}>
            <BeerList beers={props.beers} />
        </Template>
    )
}

const mapStateToProps = (store) => {
    return {
        beers: store.beers
    }
}

export default connect(mapStateToProps)(Home)