import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Header from '../../widgets/Header'
import Suggestions from './suggestions/Suggestion'
import Search from './search/Search'
import ContentBackground from '../../widgets/ContentBackground'

class Home extends Component {
    onSelectItem = (selectedItem) => {
        this.props.history.push(`/home/${selectedItem}`)
    }
    get component() {
        const { section } = this.props.match.params

        let component;
        switch (section) {
            case 'suggestions':
                component = <Suggestions />
                break
            case 'search':
                component = <Search />
                break
        }
        return component
    }
	render() {
        const { section } = this.props.match.params
		return (
			<Fragment>
                <Header
                    defaultSelectedItem={section}
                    onSelectItem={this.onSelectItem}>
                    <Header.Item title="Suggestions" id="suggestions" />
                    <Header.Item title="Search Food" id="search" />
                </Header>
                {this.component}
            </Fragment>
		);
	}
}

export default withRouter(Home)


