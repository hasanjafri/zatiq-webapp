import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../home/Home'
import './App.scss'

class App extends Component {
	render() {
		return (
			<Switch>
				<Route path="/home/:section" component={Home} />
				<Redirect to="/home/suggestions" />
			</Switch>
		);
	}
}

export default App
