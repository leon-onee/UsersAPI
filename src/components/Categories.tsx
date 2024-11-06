import { useState } from 'react'
import useFilterStore from '../store/filterStore'



const defaultStyle =
	'cursor-pointer text-[#97979B] text-md py-2 px-3 hover:text-[#050510] transition'
const activeStyle =
	'cursor-pointer text-[#050510] text-md font-semibold py-2 px-3 border-b-2 border-[#6534FF] transition'

function Categories() {
	const categories = useFilterStore((state) => state.departments)
	const setCurrentFilter = useFilterStore((state) => state.setCurrentFilter)

	const [activeIndex, setActiveIndex] = useState(0)

	const handleCategoryClick = (index: number) => {
		setActiveIndex(index)
		setCurrentFilter(categories[index].query)
	}

	return (
		<ul className='flex overflow-x-auto whitespace-nowrap'>
			{categories.map((category, i) => (
				<li
					key={i}
					onClick={() => handleCategoryClick(i)}
					className={`${activeIndex === i ? activeStyle : defaultStyle}`}
				>
					{category.name}
				</li>
			))}
		</ul>
	)
}

export default Categories
