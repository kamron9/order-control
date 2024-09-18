import carIcon from '../assets/car.svg'
import cardIcon from '../assets/card.svg'
import cashIcon from '../assets/cash.svg'
import clickIcon from '../assets/click.svg'
import paymeIcon from '../assets/payme.svg'
import takeIcon from '../assets/take.svg'
import uzumIcon from '../assets/uzum.svg'

interface IConvertText {
	text: string
	color: string
}

export const convertText = (text: string): IConvertText => {
	switch (text) {
		case 'new':
			return { text: 'Новый', color: 'bg-primary' }
		case 'in_progress':
			return { text: 'Заготовка', color: 'bg-yellow' }
		case 'completed':
			return { text: 'Готов', color: 'bg-green' }
		case 'delevered':
			return { text: 'Курьер в пути', color: 'bg-teal' }
		default:
			return { text: 'Отменено', color: 'bg-red' }
	}
}

export const getFormattedDate = (dateString: string) => {
	const date = new Date(dateString)
	const hours = String(date.getHours()).padStart(2, '0')
	const minutes = String(date.getMinutes()).padStart(2, '0')
	return `${hours}:${minutes}`
}

export const generatePaymentImg = (paymentType: string) => {
	switch (paymentType) {
		case 'cash':
			return cashIcon
		case 'payme':
			return paymeIcon
		case 'click':
			return clickIcon
		case 'card':
			return cardIcon
		case 'uzum':
			return uzumIcon
		default:
			return cashIcon
	}
}

export const generateDeliveryImg = (deliveryType: string) => {
	switch (deliveryType) {
		case 'self':
			return takeIcon
		case 'courier':
			return carIcon
		default:
			return takeIcon
	}
}
