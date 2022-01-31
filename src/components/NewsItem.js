import React, { Component } from "react";

export class NewsItem extends Component {
	render() {
		let { title, description, imgUrl, newsUrl, published } = this.props;
		return (
			<div className="my-3">
				{console.log("this is ", this.props.published)}
				<div
					className="card"
					style={{ width: "18rem", backgroundColor: "black" }}
				>
					<img
						src={imgUrl}
						className="card-img-top"
						alt="something went wrong "
					/>
					<div className="card-body">
						<h5 className="card-title text-light ">{title.slice(0, 45)}...</h5>
						<p className="card-text text-light ">
							{description.slice(0, 88)}...
						</p>
						<p className="card-text text-light ">{this.props.published}</p>

						<a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
							read more...
						</a>
					</div>
				</div>
			</div>
		);
	}
}
export default NewsItem;
