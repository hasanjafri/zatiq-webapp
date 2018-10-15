import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../home/Home'
import Login from '../login/Login'
import './App.scss'

class App extends Component {
	render() {
		return (
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/home/:section" component={Home} />
				<Redirect to="/home/suggestions" />
			</Switch>
		);
	}
}

export default App
