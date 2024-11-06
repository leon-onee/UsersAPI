import { useQuery } from 'react-query'
import fetchUsers from '../api/fetchUsers'
import useFilterStore from '../store/filterStore'

const useUsers = () => {
	const currentFilter = useFilterStore(state => state.currentFilter)
	return useQuery(['users', currentFilter], () => fetchUsers(currentFilter), {
		keepPreviousData: true,
	})
}

export default useUsers
