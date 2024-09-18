const SkeletonCard = () => {
	return (
		<div className='bg-lightGray rounded-md p-4 animate-pulse'>
			<div className='h-6 bg-gray-300 rounded mb-4 w-1/3'></div>
			<div className='h-4 bg-gray-300 rounded mb-2 w-2/3'></div>
			<div className='h-4 bg-gray-300 rounded mb-2 w-1/2'></div>
			<div className='h-4 bg-gray-300 rounded mb-2 w-full'></div>
			<div className='h-4 bg-gray-300 rounded mb-2 w-3/4'></div>
			<div className='flex justify-between items-center mt-4'>
				<div className='h-4 bg-gray-300 rounded w-1/4'></div>
				<div className='h-4 bg-gray-300 rounded w-1/5'></div>
			</div>
		</div>
	)
}

export default SkeletonCard
