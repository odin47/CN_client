import React from 'react'
import PropTypes from 'prop-types'
import './styles.css';

const Button = ({
	children,
	handleClick
}) => {
	return (
		<button onClick={handleClick}>{children}</button>
	)
}

Button.propTypes = {
	children: PropTypes.string,
	handleClick: PropTypes.func
}

export default Button
