import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";

export class News extends Component {
	static defaultProps = {
		country: "in",
		size: 6,
		category: "general",
	};
	// static PropTypes = {
	// 	country: PropTypes.string,
	// 	size: PropTypes.number,
	// };
	PropTypes = {
		country: PropTypes.string,
		size: PropTypes.number,
		category: PropTypes.string,
	};
	constructor() {
		super();
		this.state = {
			article: [],
			loading: false,
			page: 1,
		};
	}
	async componentDidMount() {
		let url = `https://newsapi.org/v2/top-headlines?country=${this.props.coun}&category=${this.props.category}&apiKey=f8de4d0e255040ef8f3cc5eca889f09e&page=1&pagesize=${this.props.size}`;
		this.setState({ loading: true });
		let data = await fetch(url);

		let freshdata = await data.json();

		this.setState({
			article: freshdata.articles,
			totalResults: freshdata.totalResults,
			loading: false,
		});
	}
	handleNext = async () => {
		if (
			!(
				this.state.page + 1 >
				Math.ceil(this.state.totalResults / this.props.size)
			)
		) {
			let url = `https://newsapi.org/v2/top-headlines?country=${
				this.props.coun
			}&category=${
				this.props.category
			}&apiKey=f8de4d0e255040ef8f3cc5eca889f09e&page=${
				this.state.page + 1
			}&pagesize=${this.props.size}`;
			this.setState({ loading: true });
			let data = await fetch(url);

			let freshdata = await data.json();

			this.setState({
				page: this.state.page + 1,
				article: freshdata.articles,
				loading: false,
			});
		}
	};
	handlePervious = async () => {
		let url = `https://newsapi.org/v2/top-headlines?country=${
			this.props.coun
		}&category=${
			this.props.category
		}&apiKey=f8de4d0e255040ef8f3cc5eca889f09e&page=${
			this.state.page - 1
		}&pagesize=${this.props.size}`;
		this.setState({ loading: true });
		let data = await fetch(url);

		let freshdata = await data.json();

		this.setState({
			page: this.state.page - 1,
			article: freshdata.articles,
			loading: false,
		});
	};
	render() {
		let { size, coun, Head } = this.props;
		return (
			<>
				{console.log("this is", Head, this.props.category)}
				<div className="container my-3 ">
					<h1 className="text-center text-light bg-dark ">
						{!this.state.loading && this.props.Head}
					</h1>
					<hr></hr>

					{this.state.loading && <Loading />}
					<div className="row">
						{!this.state.loading &&
							this.state.article.map(element => {
								return (
									<div className="col-md-4" key={element.url}>
										<NewsItem
											title={element.title ? element.title : "  "}
											description={
												element.description ? element.description : " "
											}
											imgUrl={
												element.urlToImage
													? element.urlToImage
													: "https://c.ndtvimg.com/2020-09/9kaghpsg_maharashtra-coronavirus-afp-650_625x300_05_September_20.jpg"
											}
											newsUrl={element.url ? element.url : "  "}
											published={element.publishedAt}
										/>
									</div>
								);
							})}
					</div>
				</div>
				<div className="container d-flex justify-content-around">
					<button
						type="button"
						disabled={this.state.page <= 1 ? true : false}
						className="btn btn-sm btn-dark"
						onClick={this.handlePervious}
					>
						<i className="fa fa-arrow-left" aria-hidden="true"></i> Pervious
					</button>
					<button
						type="button"
						disabled={
							this.state.page + 1 > Math.ceil(this.state.totalResults / size)
						}
						className="btn btn-sm btn-dark"
						onClick={this.handleNext}
					>
						Next <i className="fa fa-arrow-right" aria-hidden="true"></i>
					</button>
				</div>
			</>
		);
	}
}

export default News;
