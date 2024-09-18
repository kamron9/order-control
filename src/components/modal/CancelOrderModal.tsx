import { FC } from 'react'
import { useMutation } from 'react-query'
import { changeStatus, useGetProducts, useGetStatus } from '../../api'

interface ICancelOrderModal {
	id: string
	onClose: () => void
	isOpen: boolean
}

const CancelOrderModal: FC<ICancelOrderModal> = ({ id, onClose, isOpen }) => {
	const { mutate } = useMutation(changeStatus)
	const { refetch } = useGetProducts(null)
	const { refetch: refetchOrders } = useGetStatus()
	const handleChangeStatus = () => {
		mutate(
			{ orderId: id, status: 'canceled' },
			{
				onSuccess: () => {
					refetch()
					onClose()
					refetchOrders()
				},
			}
		)
	}

	return (
		<>
			{isOpen && (
				<div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
					<div className='bg-white p-4 rounded-md'>
						<h2 className='text-lg font-bold'>Отменить заказ</h2>
						<p>Вы уверены что хотите отменить заказ?</p>
						<div className='flex gap-4 mt-4'>
							<button onClick={onClose} className='text-primary'>
								Отмена
							</button>
							<button
								onClick={handleChangeStatus}
								className='bg-red text-white px-2 py-1 rounded-md'
							>
								Отменить
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default CancelOrderModal
