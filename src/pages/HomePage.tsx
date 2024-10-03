import axios from 'axios'
import { useQuery } from 'react-query'
import TopNav from '../layouts/TopNav'
import Users from '../layouts/Users'

async function fetchUsers() {
	const { data } = await axios.get(
		'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all'
	)
	return data.items
}

function HomePage() {
	const { data, isLoading, isError } = useQuery('users', fetchUsers)

	return (
		<>
			<h1 className='font-bold text-[#050510]'>Поиск</h1>
			<TopNav />
			<Users users={data} isLoading={isLoading} isError={isError} />
		</>
	)
}

export default HomePage
