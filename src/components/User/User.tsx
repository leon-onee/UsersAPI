import { Link } from 'react-router-dom'
import { TUser } from '../../types/user'
import UserImage from './UserImage'

type UserProps = {
	user: TUser
}

const User: React.FC<UserProps> = ({ user }) => {
	return (
		<Link className='w-fit' to={`/users/${user.userTag}`}>
			<div className='flex gap-4 items-center'>
				<div className='w-[72px] h-[72px] rounded-full overflow-hidden'>
					<UserImage src={user.avatarUrl} />
				</div>
				<div>
					<div className='text-[#050510] text-base font-medium'>
						{user.firstName} {user.lastName}{' '}
						<span className='font-normal text-sm text-[#97979B]'>
							{user.userTag}
						</span>
					</div>
					<div className='text-sm font-normal text-[#55555C]'>
						{user.position}
					</div>
				</div>
			</div>
		</Link>
	)
}

export default User
