import axios from 'axios'
import { useQuery } from 'react-query'

const BASE_URL = 'https://order-control-backend-new.vercel.app/api'

const fetchProducts = async (orderId: string | null) => {
	const url = orderId
		? `${BASE_URL}/orders/search?q=${orderId}` // `orderId` bo‘yicha qidirish
		: `${BASE_URL}/orders`
	const { data } = await axios.get(url)
	return data
}

export const useGetProducts = (orderId: string | null) => {
	return useQuery(['products', orderId], () => fetchProducts(orderId))
}
export const changeStatus = async ({
	orderId,
	status,
}: {
	orderId: string
	status: string
}) => {
	const data = await axios.put(`${BASE_URL}/orders/${orderId}/status`, {
		status,
	})
	return data
}

export const useGetStatus = () => {
	return useQuery(['status'], async () => {
		const { data } = await axios.get(`${BASE_URL}/orders/stats`)
		return data
	})
}
