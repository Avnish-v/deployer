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
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<>
				<Router>
					<Navbar />
					<Routes>
						<Route
							exact
							path="/"
							element={
								<News
									key="genral"
									size={5}
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
									key="sports"
									size={5}
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
									key="tec"
									size={5}
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
									key="science"
									size={5}
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
									key="ent"
									size={5}
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
									key="Health"
									size={5}
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
									size={5}
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
