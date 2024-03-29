import React from 'react'

import Header from 'components/header'
import Footer from 'components/footer'

export default class Layout extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Header {...this.props} />
                {this.props.children}
                <Footer {...this.props} />
            </React.Fragment>
        )
    }
} 