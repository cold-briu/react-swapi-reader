import React from 'react'
import { useParams } from 'react-router-dom'

const PlanetDetail = () => {
	const params = useParams()
	return (
		<div>PlanetDetail: {params.id}</div>
	)
}

export default PlanetDetail