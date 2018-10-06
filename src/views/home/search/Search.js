import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import ContentBackground from '../../../widgets/ContentBackground'

class Search extends Component {
	render() {
		return (
            <ContentBackground>
                search input with instagram style infinite scroll with images as result
            </ContentBackground>
		);
	}
}

export default withRouter(Search)
