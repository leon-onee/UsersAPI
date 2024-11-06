import { ChangeEvent, useState } from 'react'
import { useDebounceCallback } from 'usehooks-ts'
import useSearchStore from '../store/searchStore'

import SearchIcon from '/src/assets/search.svg'

function Search() {
	const setSearch = useSearchStore(state => state.setSearch)
	const [searchValue, setSearchValue] = useState('')
	const debouncedSetSearch = useDebounceCallback(setSearch, 300)

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setSearchValue(event.target.value)
		debouncedSetSearch(event.target.value)
	}

	return (
		<div className='flex items-center gap-2 grow'>
			<img src={SearchIcon} alt='' />

			<input
				className='text-sm placeholder:text-[#C3C3C6] bg-transparent outline-none ml-2'
				type='text'
				placeholder='Введи имя, тег, телефон...'
				value={searchValue}
				onChange={handleInputChange}
			/>
		</div>
	)
}

export default Search
