import { create } from 'zustand'
import { Department } from '../types/enums'

interface IFilter {
	name: string
	query: Department
}

interface IFilterState {
	departments: IFilter[]
	currentFilter: Department
	setCurrentFilter: (query: Department) => void
}

const useFilterStore = create<IFilterState>(set => ({
	departments: [
		{ name: 'Все', query: Department.ALL },
		{ name: 'Android', query: Department.Android },
		{ name: 'IOS', query: Department.IOS },
		{ name: 'Дизайн', query: Department.Design },
		{ name: 'Менеджмент', query: Department.Management },
		{ name: 'QA', query: Department.QA },
		{ name: 'Бэк-офис', query: Department.BackOffice },
		{ name: 'Frontend', query: Department.Frontend },
		{ name: 'HR', query: Department.HR },
		{ name: 'PR', query: Department.PR },
		{ name: 'Backend', query: Department.Backend },
		{ name: 'Техподдержка', query: Department.Support },
		{ name: 'Аналитика', query: Department.Analytics },
	],
	currentFilter: Department.ALL,
	setCurrentFilter: (query: Department) => set({ currentFilter: query }),
}))

export default useFilterStore
