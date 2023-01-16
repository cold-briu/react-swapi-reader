import React, { useEffect, useState } from 'react'
import { Card } from "../components"
import { getPlanets } from "../api"
import config from "../config"

const PlanetsList = () => {
	const [planets, setPlanets] = useState([])

	const getData = async () => {
		const res = await getPlanets() // hacer la petición

		//console.log(res.data.results); // usar la data
		setPlanets(res.data.results)
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<>
			{console.log("planets", planets)}

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