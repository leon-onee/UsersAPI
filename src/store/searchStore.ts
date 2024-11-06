import { create } from 'zustand'

interface ISearchtate {
	search: string
	setSearch: (newSearch: string) => void
}

const useSearchStore = create<ISearchtate>(set => ({
	search: '',
	setSearch: (newSearch: string) => set({ search: newSearch }),
}))

export default useSearchStore
