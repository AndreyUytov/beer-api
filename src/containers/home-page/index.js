import React from 'react'
import {connect} from 'react-redux'

import Template from 'components/template'
import Main from 'components/main'
import Search from 'components/search'
// import BeerList from 'components/beer-list'
import {fetchBeers} from 'actions'
// import Pagination from 'components/pagination'

export class Home extends React.Component {

    componentDidMount () {
        this.props.fetchBeers()
    }
    render () {
        return (
            <Template {...this.props}>
                <Main>
                    <Search />
                    {/* <BeerList beers={this.props.beers} /> */}
                    {/* <Pagination /> */}
                    {console.log(this.props)}
                </Main>
            </Template>
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

export default connect(mapStateToProps,mapDispatchToProps)(Home)