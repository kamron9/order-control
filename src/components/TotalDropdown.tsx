import { useState } from 'react'
import { useGetStatus } from '../api'
import arrowIcon from '../assets/arrow.svg'
import todoIcon from '../assets/todo.svg'
import { IOrderStatus } from '../types'
import { convertText } from '../utils/helper'

const TotalDropdown = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { data } = useGetStatus()
	const results = data as IOrderStatus

	const toggleDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (e.target === e.currentTarget) {
			setIsOpen(!isOpen)
		}
		setIsOpen(!isOpen)
	}

	return (
		<div className='relative inline-block'>
			<button
				onClick={toggleDropdown}
				className='flex items-center gap-1 px-4 py-2 bg-white border border-gray rounded-lg'
			>
				<img src={todoIcon} alt='todo-icon' />
				<span className='mr-2'> Всего: {results?.total}</span>
				<img
					src={arrowIcon}
					alt='arrow-icon'
					className={`w-[20px] h-[20px] transition transform ${
						isOpen ? 'rotate-180' : ''
					}`}
				/>
			</button>

			{/* Dropdown menyu */}
			{isOpen && (
				<ul className='absolute left-0  mt-2 bg-white border border-gray rounded-lg shadow-lg w-[200px]'>
					{results?.status?.length &&
						results.status.map((total, index) => {
							return (
								<li
									key={index}
									className='px-3 py-2 cursor-pointer hover:bg-gray-100 border-b border-gray'
								>
									<span
										className={`inline-block w-[10px] h-[10px] rounded-full 
										${convertText(total.status).color}
									`}
									></span>{' '}
									<span>
										{convertText(total.status).text} {total.count}
									</span>
								</li>
							)
						})}
				</ul>
			)}
		</div>
	)
}

export default TotalDropdown
