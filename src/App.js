import React from "react";
import { useState } from "react";
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
const App = props => {
	var apikey = process.env.React_App_Api || "f8de4d0e255040ef8f3cc5eca889f09e";

	var [progress, setprogress] = useState(0);
	var page = 6;

	return (
		<>
			<Router basename="/deployer/">
				<LoadingBar color="white" height={4} progress={progress} />
				<Navbar />

				<Routes>
					<Route
						exact
						path="/deployer/"
						element={
							<News
								api={apikey}
								set={setprogress}
								key="genral"
								size={page}
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
								api={apikey}
								set={setprogress}
								key="sports"
								size={page}
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
								api={apikey}
								set={setprogress}
								key="tec"
								size={page}
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
								api={apikey}
								set={setprogress}
								key="science"
								size={page}
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
								api={apikey}
								set={setprogress}
								key="ent"
								size={page}
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
								api={apikey}
								set={setprogress}
								key="Health"
								size={page}
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
								api={apikey}
								set={setprogress}
								size={page}
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
};

// App.propTypes = propTypes;
// App.defaultProps = defaultProps;
// #endregion

export default App;
