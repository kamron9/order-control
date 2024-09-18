import { FC } from 'react'
import { cateogries } from '../constants/categories'
import { IOrder } from '../types'
import { convertText } from '../utils/helper'
import SkeletonCard from './CardSkeleton'
import OrderCard from './orderCard'

interface CategoryProps {
	data: IOrder[]
	isLoading: boolean
}

const Categories: FC<CategoryProps> = ({ data, isLoading }) => {
	return (
		<div className='flex items-start gap-5 p-layout'>
			{cateogries.map(category => {
				const filteredOrders = data?.filter(order => order?.status === category)

				return (
					<div key={category} className='grow bg-lightGray rounded-b-md '>
						<div
							className={`${
								convertText(category).color
							} grow h-[48px] flex items-center rounded-tl-md rounded-tr-md px-4`}
						>
							<span className='font-bold text-white'>
								{convertText(category).text}
							</span>
						</div>
						<div className='p-4'>
							{isLoading && <SkeletonCard />}
							{filteredOrders?.length > 0 && (
								<div className='grid gap-4'>
									{filteredOrders.map(order => (
										<OrderCard key={order._id} order={order} />
									))}
								</div>
							)}
							{!isLoading && filteredOrders?.length === 0 && <p>Пусто</p>}
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Categories
