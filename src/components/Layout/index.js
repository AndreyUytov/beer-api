import React from 'react'

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