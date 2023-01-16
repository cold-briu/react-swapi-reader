import Axios from "axios"
import config from "../config"

const api = Axios.create({
	baseURL: "https://swapi.dev/api/"
})

const getPlanets = async () => {
	const data = await api.get("/planets")
	return data
}

const getPlanetDetail = async (id) => {
	const data = await api.get(`${config.routes.PLANETS}/${id}`)
	return data
}

export {
	getPlanets,
	getPlanetDetail
}