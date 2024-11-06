import { Link, useParams } from 'react-router-dom'

import Error from '../components/Error'
import UserCard from '../components/User/UserCard'
import useUsers from '../hooks/useUsers'
import { TUser } from '../types/user'
import ChevronIcon from '/src/assets/chevron.svg'

const ContactPage = () => {
	const { tag } = useParams()
	const { data: users = [], isLoading, isError, refetch } = useUsers()

	const user = users.filter((user: TUser) => user.userTag === tag)[0]

	if (isError) {
		return <Error refetch={refetch} />
	}

	return (
		<div>
			<Link to={'/'}>
				<img src={ChevronIcon} alt='' />
			</Link>
			{isLoading && <h1 className='mt-8 text-center'>Идет загрузка...</h1>}
			{!isLoading && <UserCard user={user} />}
		</div>
	)
}

export default ContactPage
