import axios from 'axios'
import { Department } from '../types/enums'
import { TUser } from '../types/user'

async function fetchUsers(currentFilter: Department): Promise<TUser[]> {
	const { data } = await axios.get(
		`https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${currentFilter}`
	)
	return data.items
}

export default fetchUsers
