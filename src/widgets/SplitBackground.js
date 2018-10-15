import React, { Component } from 'react'
import classnames from 'classnames'
import './SplitBackground.scss'

class SplitBackground extends Component {
    static Content = props => {
        const {
            className
        } = props
        return (
            <div className={classnames('split-content', className)}>
                { props.children }
            </div>
        )
    }
    render() {
        return (
            <div className="split-background">
                { this.props.children }
            </div>
        )
    }
}

export default SplitBackground