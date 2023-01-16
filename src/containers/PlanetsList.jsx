import React, { useEffect, useState } from 'react'
import { Card } from "../components"
import { getPlanets } from "../api"
import config from "../config"

const PlanetsList = () => {
	const [planets, setPlanets] = useState([])
	const [error, setError] = useState("")

	const getData = async () => {


		try {

			const res = await getPlanets() // hacer la petición
			setPlanets(res.data.results)

		} catch (error) {
			setError(error.message)
		}

	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<>
			{error.length > 0 ? <p>error: {error}</p> : null}
			{
				planets.map(
					(e, i) => (
						<Card
							key={i} title={e.name} desc={e.terrain}
							link={`${config.routes.PLANETS}/${i + 1}`}

						/>
					)
				)
			}
		</>
	)
}

export default PlanetsList