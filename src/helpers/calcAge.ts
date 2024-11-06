function calcAge(birthDateString: string): string {
	const today = new Date();
	const birthDate = new Date(birthDateString);

	let age = today.getFullYear() - birthDate.getFullYear();
	const monthDifference = today.getMonth() - birthDate.getMonth();
	const dayDifference = today.getDate() - birthDate.getDate();

	if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
			age--;
	}

	return `${age} ${getYearSuffix(age)}`;
}

function getYearSuffix(age: number): string {
	const lastDigit = age % 10;
	const lastTwoDigits = age % 100;

	if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
			return "лет";
	}
	
	switch (lastDigit) {
			case 1:
					return "год";
			case 2:
			case 3:
			case 4:
					return "года";
			default:
					return "лет";
	}
}

export default calcAge