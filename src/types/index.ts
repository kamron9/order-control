export interface IProduct {
	_id: string
	details: string
	price: number
	quantity: number
	title: string
}

export interface IOrder {
	_id: string
	products: IProduct[]
	orderId: number
	total: number
	status: string
	createdAt: string
	totalPrice: number
	deliveryType: string
	paymentType: string
	comments: string[]
}

interface IStatus {
	status: string
	count: number
}
export interface IOrderStatus {
	total: number
	status: IStatus[]
}
