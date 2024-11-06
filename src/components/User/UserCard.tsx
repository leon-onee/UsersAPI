import calcAge from '../../helpers/calcAge'
import formatDate from '../../helpers/formatDate'
import formatPhoneNumber from '../../helpers/formatPhoneNumber'
import { TUser } from '../../types/user'
import UserImage from './UserImage'
import FavoriteIcon from '/src/assets/favorite.svg'
import PhoneIcon from '/src/assets/phone-alt.svg'

type TUserCardProps = {
	user: TUser
}

const UserCard: React.FC<TUserCardProps> = ({ user }) => {
	return (
		<>
			<div className='mt-7'>
				<div className='grid place-items-center'>
					<div className='w-[104px] h-[104px] rounded-full overflow-hidden'>
						<UserImage src={user.avatarUrl} />
					</div>
					<div className='text-[#050510] text-2xl font-bold mt-6'>
						{user.firstName} {user.lastName}{' '}
						<span className='font-normal text-base text-[#97979B]'>
							{user.userTag}
						</span>
					</div>
					<div className='text-sm font-normal text-[#55555C] mt-3'>
						{user.position}
					</div>
				</div>
			</div>
			<div className='mt-8 grid gap-4'>
				<div className='flex'>
					<div className='flex items-center gap-2 grow'>
						<img src={FavoriteIcon} alt='' />
						<span className='text-[#050510] font-medium'>
							{formatDate(user.birthday)}
						</span>
					</div>
					<span className='text-[#97979B] font-medium'>
						{calcAge(user.birthday)}
					</span>
				</div>
				<div className='flex items-center gap-2'>
					<img src={PhoneIcon} alt='' />
					<span className='text-[#050510] font-medium'>
						{formatPhoneNumber(user.phone)}
					</span>
				</div>
			</div>
		</>
	)
}

export default UserCard
