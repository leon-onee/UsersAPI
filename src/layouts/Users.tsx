import Error from '../components/Error'
import User from '../components/User/User'
import UserSkeleton from '../components/User/UserSkeleton'
import useUsers from '../hooks/useUsers'
import useSearchStore from '../store/searchStore'
import { TUser } from '../types/user'

const Users: React.FC = () => {
	const search = useSearchStore(state => state.search)
	const { data: users = [], isLoading, isError, refetch } = useUsers()

	if (isError) {
		return <Error refetch={refetch} />
	}

	if (!isLoading && users.length === 0) {
		return (
			<div className='mt-4 grid gap-3'>
				<h2>Нет данных</h2>
			</div>
		)
	}

	const filteredUsers = search
		? users.filter(user =>
				[user.firstName, user.lastName, user.phone, user.userTag].some(field =>
					field.toLowerCase().includes(search.toLowerCase())
				)
		  )
		: users

	return (
		<div className='mt-4 grid gap-3'>
			{isLoading &&
				Array(10)
					.fill(null)
					.map((_, index) => <UserSkeleton key={index} />)}

			{!isLoading &&
				filteredUsers.map((user: TUser) => <User user={user} key={user.id} />)}
		</div>
	)
}

export default Users
