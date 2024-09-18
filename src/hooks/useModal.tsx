import { useState } from 'react'

export const useModal = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [id, setId] = useState<string>('')

	const openModal = (id: string) => {
		setIsOpen(true)
		setId(id)
	}
	const closeModal = () => {
		setIsOpen(false)
		setId('')
	}

	return { isOpen, openModal, closeModal, id }
}
