import React, { Component } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import './Header.scss'

const HeaderContext = React.createContext()

class Header extends Component {
    state = {
        selectedItem: this.props.defaultSelectedItem || null
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.selectedItem !== this.state.selectedItem
    }
    static Item = props => {
        const {
            id,
            title
        } = props
        return (
            <HeaderContext.Consumer>
                {({ onSelectItem, state }) => {
                    const selected = state.selectedItem === id
                    const className = classnames('header-item', { selected })
                    return (
                        <div className={className} onClick={() => onSelectItem(id)}>
                            { title }
                        </div>
                    )
                }}
            </HeaderContext.Consumer>
        )
    }
    getStateAndHelpers = () => {
        return {
			state: this.state,
			onSelectItem: this.onSelectItem
		}
    }
    onSelectItem = selectedItem => {
        this.setState({ selectedItem })
        this.props.onSelectItem && this.props.onSelectItem(selectedItem)
    }
    render() {
        const { zatiq } = this.props
        const childrenArray = React.Children.toArray(this.props.children)
        return (
            <div className="header" style={zatiq ? {
                backgroundImage: `url(${require('../assets/background/header.png')})`,
                backgroundSize: 'cover',
                overflow: 'hidden'
            } : {}}>
                <span className={classnames('header-brand', { 'zatiq': zatiq })}>Zatiq Web</span>
                <span className="header-content">
                    {childrenArray.map((child, i) => {
                        if (child.type !== Header.Item) {
                            throw 'Header needs its children to be of type Header.Item';
                        }
                        return (
                            <HeaderContext.Provider key={i} value={this.getStateAndHelpers()}>
                                {child}
                            </HeaderContext.Provider>
                        )
                    })}
                </span>
                <span className="header-extra"></span>
            </div>
        )
    }
}

Header.propTypes = {
    defaultSelectedItem: PropTypes.string,
    onSelectItem: PropTypes.func,
    zatiq: PropTypes.bool
}
Header.Item.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string
}

export default Header
