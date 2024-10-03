import { Department } from './enums'

type User = {
	id: string
	avatarUrl: string
	firstName: string
	lastName: string
	userTag: string
	department: Department
	position: string
	birthday: string
	phone: string
}

type UsersResponse = {
	items: User[]
}

export { User, UsersResponse }
