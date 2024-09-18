import toast from 'react-hot-toast'
import { useSearchParams } from 'react-router-dom'
import { useGetProducts } from '../api'
import Categories from '../components/Categories'
import Search from '../components/Search'

const Orders = () => {
	const [searchParams] = useSearchParams()
	const orderId = searchParams.get('orderId')
	const { data, isLoading, error } = useGetProducts(orderId)
	if (error && (error as any).response) {
		toast.error((error as any).response.data.message)
	}
	console.log(data)
	return (
		<div>
			<Search />
			<Categories data={data} isLoading={isLoading} />
		</div>
	)
}

export default Orders
