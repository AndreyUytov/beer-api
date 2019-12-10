import React from 'react'

import Template from 'components/template'
import Main from 'components/main'

export default class Home extends React.Component {

    render () {
        return (
            <Template {...this.props}>
                <Main>
                    {this.props.children}
                </Main>
            </Template>
        )
    }
}