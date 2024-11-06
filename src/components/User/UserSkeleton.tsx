import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const UserSkeleton = () => {
	return (
		<div className='flex gap-4 items-center'>
			<div className='w-[72px] h-[72px] rounded-full overflow-hidden'>
				<Skeleton circle width='72px' height='72px' />
			</div>
			<div className='flex flex-col'>
					<Skeleton width='144px' height='16px' borderRadius='50px' />
					<Skeleton width='80px' height='12px' borderRadius='50px' />
			</div>
		</div>
	)
}

export default UserSkeleton
