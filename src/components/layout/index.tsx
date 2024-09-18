import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Layout = () => {
	return (
		<div className='flex'>
			<Sidebar />
			<div className='w-full'>
				<header className='h-[56px] border-b border-b-gray sticky w-full p-[16px]'>
					<span className='inline-block text-[20px] font-bold'>
						Cегодняшние заказы
					</span>
				</header>
				<Outlet />
			</div>
			<Toaster />
		</div>
	)
}

export default Layout
