import React from "react";
// import styled from "styled-components";
// import PropTypes from "prop-types";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {
	BrowserRouter as Router,
	Routes, // Just Use Routes instead of "Switch"
	Route,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
// const propTypes = {};

// const defaultProps = {};

/**
 *
 */
class App extends React.Component {
	api = process.env.react_app_news_api;
	constructor(props) {
		super(props);

		this.state = {};
	}
	state = {
		progress: 0,
	};
	page = 6;
	setprogress = progress => {
		this.setState({ progress: progress });
	};
	render() {
		return (
			<>
				<Router>
					<LoadingBar color="white" height={3} progress={this.state.progress} />
					<Navbar />
					<Routes>
						<Route
							exact
							path="/"
							element={
								<News
									api={this.api}
									set={this.setprogress}
									key="genral"
									size={this.page}
									coun="in"
									category="general"
									Head="Top-Headline"
								/>
							}
						></Route>
						<Route
							exact
							path="/Sports"
							element={
								<News
									api={this.api}
									set={this.setprogress}
									key="sports"
									size={this.page}
									coun="in"
									category="sports"
									Head="Sports"
								/>
							}
						></Route>
						<Route
							exact
							path="/Technology"
							element={
								<News
									api={this.api}
									set={this.setprogress}
									key="tec"
									size={this.page}
									coun="in"
									category="technology"
									Head="Technology"
								/>
							}
						></Route>
						<Route
							exact
							path="/Science"
							element={
								<News
									api={this.api}
									set={this.setprogress}
									key="science"
									size={this.page}
									coun="in"
									category="science"
									Head="Science"
								/>
							}
						></Route>
						<Route
							exact
							path="/Entertainment"
							element={
								<News
									api={this.api}
									set={this.setprogress}
									key="ent"
									size={this.page}
									coun="in"
									category="entertainment"
									Head="Entertainment"
								/>
							}
						></Route>
						<Route
							exact
							path="/Health"
							element={
								<News
									api={this.api}
									set={this.setprogress}
									key="Health"
									size={this.page}
									coun="in"
									category="health"
									Head="Health"
								/>
							}
						></Route>
						<Route
							exact
							path="/Business"
							element={
								<News
									api={this.api}
									set={this.setprogress}
									size={this.page}
									key="business"
									coun="in"
									category="business"
									Head="Business"
								/>
							}
						></Route>
					</Routes>
				</Router>
			</>
		);
	}
}

// App.propTypes = propTypes;
// App.defaultProps = defaultProps;
// #endregion

export default App;
