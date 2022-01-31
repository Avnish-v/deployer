import React, { Component } from "react";

export class NewsItem extends Component {
	render() {
		let { title, description, imgUrl, newsUrl, published, author, source } =
			this.props;
		return (
			<div className="my-3">
				<div
					className="card"
					style={{ width: "18rem", backgroundColor: "black" }}
				>
					<span
						className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
						style={{ left: "90%", zindex: "1" }}
					>
						{source}
					</span>
					<img
						src={imgUrl}
						className="card-img-top"
						alt="something went wrong "
					/>
					<div className="card-body">
						<h5 className="card-title text-light ">{title.slice(0, 45)}... </h5>
						<p className="card-text text-light ">
							{description.slice(0, 88)}...
						</p>
						<p className="card-text">
							<small className="text-muted">
								{author} on {new Date(published).toUTCString()}
							</small>
						</p>

						<a href={newsUrl} target="__blank" className="btn btn-sm btn-dark">
							read more...
						</a>
					</div>
				</div>
			</div>
		);
	}
}
export default NewsItem;
