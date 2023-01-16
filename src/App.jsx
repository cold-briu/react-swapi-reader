import React from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

import { Home, Planets, Notfound, PlanetDetail } from "./pages"
import { Navbar } from "./layout"
import config from "./config"

const { routes } = config // destructuring 


const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<Navbar />} >

				<Route path={routes.HOME} element={<Home />} />

				<Route path={routes.PLANETS} element={<Planets />} />

				<Route path={`${routes.PLANETS}/:id`} element={<PlanetDetail />} />


				<Route path="*" element={<Notfound />} />

			</Route>
		</>
	)
);

const App = () => {
	return (
		<div>

			<RouterProvider router={router} />
		</div>
	)
}

export default App;

/*
<Home />
<Planets />
<Notfound />
*/