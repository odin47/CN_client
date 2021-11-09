import React from 'react'
import PropTypes from 'prop-types'
import './styles.css';

const Input = ({
	handleChange,
	isLabelRequired,
	placeholder,
	value
}) => {
	return (
		<>
			{
				isLabelRequired && <label for="search">Search : </label> 
			}
			<input id="search" value={value} onChange={handleChange} placeholder={placeholder}/>
		</>
	)
}

Input.propTypes = {
	handleChange: PropTypes.func,
	isLabelRequired: PropTypes.bool,
	placeholder: PropTypes.string,
	value: PropTypes.string
}

Input.defaultProps = {
	isLabelRequired: true,
	placeholder: 'Eg: Covid-19'
}

export default Input
