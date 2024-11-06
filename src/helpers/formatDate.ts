function formatDate(dateString: string) {
	const months = [
			"января", "февраля", "марта", "апреля", "мая", "июня",
			"июля", "августа", "сентября", "октября", "ноября", "декабря"
	];

	const [year, month, day] = dateString.split("-");
	const monthName = months[parseInt(month, 10) - 1]; // Преобразуем номер месяца в название
	return `${parseInt(day, 10)} ${monthName} ${year}`;
}

export default formatDate