import Categories from '../components/Categories'
import Filter from '../components/Filter'
import Search from '../components/Search'

function TopNav() {
	

	return (
		<div className='border-b border-color-[#C3C3C6]'>
			<div className='rounded-2xl bg-[#F7F7F8]  py-2 px-3 mt-4 flex items-center'>
				<Search />
				<Filter />
			</div>

			<div className='mt-2'>
				<Categories />
			</div>
		</div>
	)
}

export default TopNav
