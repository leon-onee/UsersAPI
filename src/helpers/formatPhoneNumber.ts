function formatPhoneNumber(phoneNumber: string): string {
	const digits = phoneNumber.replace(/\D/g, '')

	if (digits.startsWith('7') && digits.length === 11) {
		return `+7 (${digits.slice(1, 4)}) ${digits.slice(4, 7)} ${digits.slice(
			7,
			9
		)} ${digits.slice(9)}`
	} else {
		throw new Error('Номер телефона должен начинаться с +7 и содержать 11 цифр')
	}
}

export default formatPhoneNumber
