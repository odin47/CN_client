import React from 'react'
import PropTypes from 'prop-types'
import { convertDate } from 'utils';
import './styles.css';

const Tile = ({
	imageUrl,
	title,
	publishedAt,
	link
}) => {
	return (
		<a href={link} className="tileContainer" target="_blank" rel="noopener noreferrer">
			<div className="imageContainer">
				<img src={imageUrl} alt="Tile" />
			</div>
			<div className="contentContainer">
				<div className="sm-heading">
					{title}
				</div>
				<div className="dateContainer">
					Published on {convertDate(publishedAt)}
				</div>
			</div>
		</a>
	)
}

Tile.propTypes = {
	imageUrl: PropTypes.string,
	title: PropTypes.string,
	publishedAt: PropTypes.string,
	link: PropTypes.string
}

export default Tile
