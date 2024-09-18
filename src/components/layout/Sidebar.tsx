import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { sidebar } from '../../constants/sidebar'
const Sidebar = () => {
	return (
		<aside className='w-[56px] h-screen sticky left-0 top-0 border-r border-gray'>
			<div className='mb-5 pt-[16px] px-layout'>
				<img src={logo} alt='logo' width={32} height={32} />
			</div>
			<nav className='p-layout'>
				{sidebar.map(item => (
					<NavLink
						key={item.path}
						to={item.path}
						className='block p-2 text-center'
					>
						<img src={item.icon} alt={item.title} width={24} height={24} />
					</NavLink>
				))}
			</nav>
		</aside>
	)
}

export default Sidebar
