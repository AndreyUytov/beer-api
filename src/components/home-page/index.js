import React from 'react'
import {connect} from 'react-redux'

import Template from 'components/template'
import BeerList from 'components/beer-list'
import {fetchBeers} from 'actions'

export class Home extends React.Component {
    componentDidMount () {
        this.props.fetchBeers()
    }
    render () {
        return (
            <Template {...this.props}>
                <BeerList beers={this.props.allBeers.allBeers} />
                {/* {console.log(this.props)} */}
            </Template>
        )
    }
}

const mapStateToProps = (state) => {
    return {
       allBeers: state.allBeers
    }
}

const mapDispatchToProps = {
    fetchBeers
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)