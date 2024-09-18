import { FC } from 'react'
import { useMutation } from 'react-query'
import { changeStatus, useGetProducts, useGetStatus } from '../../api'
import checkBlueIcon from '../../assets/check-blue.svg'
import checkIcon from '../../assets/check.svg'
import closeIcon from '../../assets/close.svg'

enum OrderStatus {
	NEW = 'new',
	IN_PROGRESS = 'in_progress',
	COMPLETED = 'completed',
	DELEVERED = 'delevered',
}

interface IOrderCardActions {
	status: string
	id: string
	openModal: (id: string) => void
}
const OrderCardActions: FC<IOrderCardActions> = ({ status, id, openModal }) => {
	const { mutate } = useMutation(changeStatus)
	const { refetch } = useGetProducts(null)
	const { refetch: refetchOrders } = useGetStatus()

	const handleStatusChange = (status: string, id: string) => {
		mutate(
			{ orderId: id, status },
			{
				onSuccess: () => {
					refetch()
					refetchOrders()
				},
			}
		)
	}
	switch (status) {
		case 'new':
			return (
				<div className='flex gap-2 border-t border-t-gray p-layout mt-2'>
					<button
						onClick={() => openModal(id)}
						className='text-red w-1/2 h-[36px] flex items-center justify-center gap-1'
					>
						<img src={closeIcon} alt='close-icon' />
						Отменить
					</button>
					<button
						onClick={() => handleStatusChange(OrderStatus.IN_PROGRESS, id)}
						className='bg-primary grow h-[36px] text-white flex items-center justify-center gap-1 rounded-md'
					>
						<img src={checkIcon} alt='close-icon' />
						Принять
					</button>
				</div>
			)
		case 'in_progress':
			return (
				<div className='p-layout'>
					<button
						onClick={() => handleStatusChange(OrderStatus.COMPLETED, id)}
						className='border w-full border-primary rounded-md flex items-center justify-center h-[36px] text-primary gap-1'
					>
						<img src={checkBlueIcon} alt='chec-icon' />
						Готово
					</button>
				</div>
			)
		case 'completed':
			return (
				<div className='p-layout'>
					<button
						onClick={() => handleStatusChange(OrderStatus.DELEVERED, id)}
						className='border w-full border-primary rounded-md flex items-center justify-center h-[36px] text-primary gap-1'
					>
						Завершить
					</button>
				</div>
			)
		default:
			return null
	}
}

export default OrderCardActions
