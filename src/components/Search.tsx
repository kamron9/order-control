import React from 'react'
import { useSearchParams } from 'react-router-dom'
import clockIcon from '../assets/clock-outlined.svg'
import closeIcon from '../assets/close.svg'
import searchIcon from '../assets/search.svg'
import TotalDropdown from './TotalDropdown'

const Search = () => {
	const date = `${new Date().getHours()} : ${new Date().getMinutes()}`
	const [searchParams, setSearchParams] = useSearchParams()
	const orderId = searchParams.get('orderId') || ''

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.replace(/\D/g, '')

		if (value) {
			searchParams.set('orderId', value.toString())
		} else {
			searchParams.delete('orderId')
		}
		setSearchParams(searchParams)
	}

	const handleClear = () => {
		searchParams.delete('orderId')
		setSearchParams(searchParams)
	}

	return (
		<div className='p-[16px] flex items-center justify-between'>
			<div className='flex items-center gap-1 border border-gray rounded-md w-[240px] h-[36px] p-1 px-2'>
				<img src={searchIcon} alt='search-icon' />
				<input
					type='text'
					className='w-full h-full focus:outline-none border-none'
					value={orderId}
					onChange={handleSearch}
					placeholder='Поиск по ID'
				/>
				{orderId && (
					<button type='button' className='ml-2' onClick={handleClear}>
						<img src={closeIcon} alt='clear-icon' />
					</button>
				)}
			</div>
			<div className='flex items-center gap-2'>
				<TotalDropdown />
				<div className='border border-gray rounded-md px-4 py-2 flex items-center gap-2'>
					<img src={clockIcon} alt='clock-icon' />
					<span>{date}</span>
				</div>
			</div>
		</div>
	)
}

export default Search
