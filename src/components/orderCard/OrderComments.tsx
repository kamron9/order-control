import { useState } from 'react'
import arrowIcon from '../../assets/arrow.svg'

const OrderComments = ({ comments }: { comments: string[] }) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleAccordion = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div>
			<div
				className='flex justify-between items-center px-4 py-2 cursor-pointer  rounded-md'
				onClick={toggleAccordion}
			>
				<p className='text-sm text-deepGray'>
					Коментарии <span>{comments?.length}</span>
				</p>
				<div>
					<img
						src={arrowIcon}
						alt='arrow icon'
						className={`w-[20px] h-[20px] transition duration-500 transform ${
							isOpen ? 'rotate-180' : ''
						}`}
					/>
				</div>
			</div>
			<div
				className={`transition-all duration-500 ease-in-out overflow-hidden ${
					isOpen ? 'max-h-96' : 'max-h-0'
				}`}
				style={{ maxHeight: isOpen ? '400px' : '0px' }}
			>
				{comments.length > 0 ? (
					<ul>
						{comments.map((comment, index) => (
							<li key={index} className='p-layout border-b border-gray text-sm'>
								{comment}
							</li>
						))}
					</ul>
				) : (
					<p className='text-gray-500'>No comments</p>
				)}
			</div>
			{/* {isOpen && (
				<div className='px-4 py-2 bg-white'>
					{comments.length > 0 ? (
						<ul>
							{comments.map((comment, index) => (
								<li key={index} className='py-1 border-b border-gray'>
									{comment}
								</li>
							))}
						</ul>
					) : (
						<p className='text-gray-500'>No comments</p>
					)}
				</div>
			)} */}
		</div>
	)
}

export default OrderComments
