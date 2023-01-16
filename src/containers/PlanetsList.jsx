import React, { useEffect, useState } from 'react'
import { Card } from "../components"
import { getPlanets } from "../api"
import config from "../config"

const PlanetsList = () => {
	const [planets, setPlanets] = useState([])
	const [error, setError] = useState("")
	const [isLoading, setIsLoading] = useState(false)

	const getData = async () => {
		try {
			setIsLoading(true)
			const res = await getPlanets() // hacer la petición
			setIsLoading(false)
			setPlanets(res.data.results)
		} catch (error) {
			setIsLoading(false)
			setError(error.message)
		}
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<>
			{
				isLoading ? <p>... Loading</p> : null
			}
			{
				error.length > 0 ? <p>error: {error}</p> : null
			}
			{
				planets.length > 0 ? planets.map(
					(e, i) => (
						<Card
							key={i} title={e.name} desc={e.terrain}
							link={`${config.routes.PLANETS}/${i + 1}`}

						/>
					)
				) : null
			}
		</>
	)
}

export default PlanetsList