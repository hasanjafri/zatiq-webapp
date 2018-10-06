import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import ContentBackground from '../../../widgets/ContentBackground'

class Suggestions extends Component {
	render() {
		return (
            <ContentBackground>
                show 5 suggestions, then moods following these suggestions
            </ContentBackground>
		);
	}
}

export default withRouter(Suggestions)
