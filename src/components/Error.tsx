import React from 'react'
import {
	QueryObserverResult,
	RefetchOptions,
	RefetchQueryFilters,
} from 'react-query'
import ErrorImg from '/src/assets/error.png'

type ErrorProps = {
	refetch: <TPageData>(
		options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	) => Promise<QueryObserverResult<any, unknown>>
}

const Error: React.FC<ErrorProps> = ({ refetch }) => {
	const handleClick = () => {
		refetch()
	}

	return (
		<div className='flex flex-col justify-center items-center grow'>
			<div className='w-14 h-14 justify-self-center'>
				<img src={ErrorImg} alt='' />
			</div>
			<div className='text-[#050510] font-semibold mt-2'>
				Какой-то сверхразум все сломал
			</div>
			<div className='text-[#97979B] mt-3'>Постараемся быстро починить</div>
			<button
				className='text-[#6534FF] font-semibold mt-3'
				onClick={handleClick}
			>
				Попробовать снова
			</button>
		</div>
	)
}

export default Error
