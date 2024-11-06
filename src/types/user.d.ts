import { Department } from './enums'

type TUser = {
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

type TUsersResponse = {
	items: User[]
}

export { TUser, TUsersResponse }
