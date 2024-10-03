import { User } from '../types/user'

type UsersProps = {
	users: User[]
	isLoading: boolean
	isError: boolean
}

const Users: React.FC<UsersProps> = ({ users, isLoading, isError }) => {
	if (isLoading) {
		return <h2>Идет загрузка...</h2>
	}

	if (isError) {
		return <h2>Ошибка</h2>
	}

	if (!users) {
		return <h2>Нет данных</h2>
	}

	//TODO
	// skeleton

	return (
		<div className='mt-4 grid gap-3'>
			{users.length > 0
				? users.map(user => (
						<div key={user.id} className='flex gap-4 items-center'>
							<div className='w-[72px] h-[72px] rounded-full overflow-hidden'>
								<img
									className='w-full h-full object-cover'
									src={user.avatarUrl}
									alt=''
									onError={({ currentTarget }) => {
										currentTarget.onerror = null // prevents looping
										currentTarget.src = './src/assets/notfound.png'
									}}
								/>
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
				  ))
				: 'Увы'}
		</div>
	)
}

export default Users
