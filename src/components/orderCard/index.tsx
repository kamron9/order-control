import { FC } from 'react'
import alertIcon from '../../assets/alert.svg'
import clockIcon from '../../assets/clock.svg'
import { useModal } from '../../hooks/useModal'
import { IOrder } from '../../types'
import {
	generateDeliveryImg,
	generatePaymentImg,
	getFormattedDate,
} from '../../utils/helper'
import CancelOrderModal from '../modal/CancelOrderModal'
import OrderCardActions from './OrderCardActions'
import OrderComments from './OrderComments'

interface IOrderCard {
	order: IOrder
}

const OrderCard: FC<IOrderCard> = ({ order }) => {
	const { isOpen, closeModal, openModal, id } = useModal()

	return (
		<div className='bg-white rounded-md'>
			{/* card header */}
			<div className='flex items-center justify-between border-b border-b-gray p-layout'>
				<div className='text-lg font-bold flex items-center gap-2'>
					<span>ID: {order.orderId}</span>
					<img src={alertIcon} alt='alert-icon' />
				</div>
				<div className='flex items-center gap-3'>
					<span className='text-[12px] text-deepGray'>
						{order?.totalPrice?.toLocaleString('ru')} сум
					</span>
					<img
						src={generatePaymentImg(order.paymentType)}
						alt='payment img'
						className='w-[16px] h-[16px]'
					/>
					<img
						src={generateDeliveryImg(order.deliveryType)}
						className='w-[16px] h-[16px]'
						alt='delever img'
					/>
				</div>
			</div>
			{/* card body */}
			<div className='p-layout'>
				{order.products.map(product => (
					<div key={product._id} className='flex flex-col'>
						<div className='flex gap-2'>
							<span className='text-sm'>{product.quantity} x</span>
							<div className='flex flex-col'>
								<span className='text-sm text-black'>{product.title}</span>
								<span className='text-sm text-darkGray'>
									{product.details}{' '}
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
			{/* time */}
			<div className='pr-layout flex items-center justify-end gap-1'>
				<img src={clockIcon} alt='clock-icon' />
				<span className='text-[12px] text-deepGray p-2'>
					{getFormattedDate(order.createdAt)}
				</span>
			</div>
			{/* order comments */}
			{order.comments.length > 0 && <OrderComments comments={order.comments} />}

			{/* card actions */}
			<OrderCardActions
				status={order?.status}
				id={order._id}
				openModal={openModal}
			/>
			<CancelOrderModal id={id} isOpen={isOpen} onClose={closeModal} />
		</div>
	)
}

export default OrderCard
