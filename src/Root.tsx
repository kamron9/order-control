import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Layout from './components/layout'
import Orders from './pages/Orders'

const routes = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Navigate to={'/orders'} />,
			},
			{
				path: '/orders',
				element: <Orders />,
			},
		],
	},
])

const Root = () => {
	return <RouterProvider router={routes} />
}
export default Root
