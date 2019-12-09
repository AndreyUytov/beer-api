import React from 'react'

import Template from 'components/template'
import Main from 'components/main'
import Search from 'components/search'
import Pagination from 'containers/pagination'

export default class Home extends React.Component {

    render () {
        return (
            <Template {...this.props}>
                <Main>
                    <Search />
                    {this.props.children}
                    <Pagination />
                </Main>
            </Template>
        )
    }
}