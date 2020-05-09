import React from 'react'

const CityInfo = (props) => {
	const { city, duration } = props.info
	const cityName = city
	const dur = duration

	return (
		<div style={{color: "black", fontSize: "12px"}}>
			{dur} | {cityName}
		</div>
	)
}

export default CityInfo