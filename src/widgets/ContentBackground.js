import React, { Component } from 'react'
import classnames from 'classnames'
import './ContentBackground.scss'

class ContentBackground extends Component { 
    render() {
        return (
            <div className={classnames(this.props.className, 'content-background')} style={this.props.style || {}}>
                { this.props.children }
            </div> 
        )
    }
}

export default ContentBackground