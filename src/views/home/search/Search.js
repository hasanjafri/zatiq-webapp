import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { searchCuisine } from '../../../store/actions/suggestions.actions' 
import ContentBackground from '../../../widgets/ContentBackground'

class Search extends Component {
	componentDidMount() {
		const guestCuisines = ['Promotions', 'Surprise Me', 'Top Picks', 'Newest'];
		this.props.searchCuisine(guestCuisines[0]);
	}
	render() {
		return (
            <ContentBackground>
                search input with instagram style infinite scroll with images as result
            </ContentBackground>
		);
	}
}

export default withRouter(connect(
    (state, ownProps) => ({ user: state.user }),
    { searchCuisine }
)(Search))
