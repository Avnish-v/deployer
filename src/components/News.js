import React, { useEffect, useState } from "react";

import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
const News = props => {
	const [article, setarticle] = useState([]);
	const [loading, setloading] = useState(true);
	const [page, setpage] = useState(1);
	const [totalResults, settotalResults] = useState(0);

	const capital = word => {
		let news = word.charAt(0).toUpperCase();

		return news + word.slice(1);
	};
	// document.title =
	// 	props.category === "general"
	// 		? "Top-Headline"
	// 		: capital(props.category) + " -NEWSMONKEY";

	useEffect(() => {
		updatenews();
	}, []);

	const updatenews = async pageno => {
		props.set(10);
		const url = `https://newsapi.org/v2/top-headlines?country=${props.coun}&category=${props.category}&apiKey=${props.api}&page=${page}&pagesize=${props.size}`;

		setloading(true);
		let data = await fetch(url);
		props.set(30);

		let freshdata = await data.json();
		props.set(70);
		setarticle(freshdata.articles);
		settotalResults(freshdata.totalResults);
		setloading(false);
		props.set(100);
	};
	const fetchMoreData = async () => {
		const url = `https://newsapi.org/v2/top-headlines?country=${
			props.coun
		}&category=${props.category}&apiKey=${props.api}&page=${
			page + 1
		}&pagesize=${props.size}`;

		setpage(page + 1);
		setloading(true);
		let data = await fetch(url);

		let freshdata = await data.json();
		setarticle(article.concat(freshdata.articles));
		settotalResults(freshdata.totalResults);
		setloading(false);
	};

	// let { size, coun, Head, set, api } = props;
	return (
		<>
			<div className="container my-3 ">
				<h1
					className="text-center text-light bg-dark "
					style={{ marginTop: "90px" }}
				>
					NewsMonkey- {!loading && props.Head}
				</h1>
				<hr></hr>

				{loading && <Loading />}

				<InfiniteScroll
					dataLength={article.length}
					next={fetchMoreData}
					hasMore={article.length !== totalResults}
					loader={<Loading />}
				>
					<div className="container">
						<div className="row">
							{article.map(element => {
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
};
News.defaultProps = {
	country: "in",
	size: 6,
	category: "general",
};

// News.PropTypes = {
// 	country: PropTypes.string,
// 	size: PropTypes.number,
// 	category: PropTypes.string,
// };

export default News;
