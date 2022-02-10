import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
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
	capital = word => {
		let news = word.charAt(0).toUpperCase();

		return news + word.slice(1);
	};

	constructor(props) {
		super(props);
		this.state = {
			article: [],
			loading: false,
			page: 1,
			totalResults: 0,
		};
		document.title =
			this.props.category === "general"
				? "Top-Headline"
				: this.capital(this.props.category) + " -NEWSMONKEY";
	}
	async componentDidMount() {
		this.updatenews();
	}

	async updatenews(pageno) {
		this.props.set(10);
		const url = `https://newsapi.org/v2/top-headlines?country=${this.props.coun}&category=${this.props.category}&apiKey=f8de4d0e255040ef8f3cc5eca889f09e&page=${this.state.page}&pagesize=${this.props.size}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		this.props.set(30);

		let freshdata = await data.json();
		this.props.set(70);

		this.setState({
			article: freshdata.articles,
			totalResults: freshdata.totalResults,
			loading: false,
		});
		this.props.set(100);
	}
	// handleNext = async () => {

	// 	this.setState({ page: this.state.page + 1 });
	// 	this.updatenews();
	// };
	// handlePervious = async () => {
	// 	this.setState({ page: this.state.page - 1 });
	// 	this.updatenews();
	// };
	fetchMoreData = async () => {
		this.setState({ page: this.state.page + 1 });
		const url = `https://newsapi.org/v2/top-headlines?country=${this.props.coun}&category=${this.props.category}&apiKey=f8de4d0e255040ef8f3cc5eca889f09e&page=${this.state.page}&pagesize=${this.props.size}`;
		this.setState({ loading: true });
		let data = await fetch(url);

		let freshdata = await data.json();

		this.setState({
			article: this.state.article.concat(freshdata.articles),
			totalResults: freshdata.totalResults,
			loading: false,
		});
	};
	render() {
		let { size, coun, Head, set } = this.props;
		return (
			<>
				<div className="container my-3 ">
					<h1 className="text-center text-light bg-dark ">
						NewsMonkey- {!this.state.loading && this.props.Head}
					</h1>
					<hr></hr>

					{this.state.loading && <Loading />}

					<InfiniteScroll
						dataLength={this.state.article.length}
						next={this.fetchMoreData}
						hasMore={this.state.article.length !== this.state.totalResults}
						loader={<Loading />}
					>
						<div className="container">
							<div className="row">
								{this.state.article.map(element => {
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
												author={element.author ? "by " + element.author : ""}
												source={element.source.name}
											/>
										</div>
									);
								})}
							</div>
						</div>
					</InfiniteScroll>
				</div>
			</>
		);
	}
}

export default News;
