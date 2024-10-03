import { useState } from 'react'

const categories = [
	'Все',
	'Designers',
	'Analysts',
	'Managers',
	'iOS',
	'Android',
]

const defaultStyle =
	'cursor-pointer text-[#97979B] text-md py-2 px-3 hover:text-[#050510] transition'
const activeStyle =
	'cursor-pointer text-[#050510] text-md font-semibold py-2 px-3 border-b-2 border-[#6534FF] transition'

function Categories() {
	const [activeIndex, setActiveIndex] = useState(0)

	const handleCategoryClick = (index: number) => {
		setActiveIndex(index)
	}

	return (
		<ul className='flex'>
			{categories.map((categoriesName, i) => (
				<li
					key={i}
					onClick={() => handleCategoryClick(i)}
					className={`${activeIndex === i ? activeStyle : defaultStyle}`}
				>
					{categoriesName}
				</li>
			))}
		</ul>
	)
}

export default Categories
