import Link from "next/link";

import styles from "../styles/tuy-2016.module.css";

const data = [
	{
		participant_ru: "Онческу Костин-Андрей",
		participant_en: "Oncescu Costin-Andrei",
		country_ru: "Румыния",
		country_en: "Romania",
		problems1: [100, 100, 20, 100],
		problems2: [100, 61, 90, 100],
		place: "1DG",
	},
	{
		participant_ru: "Жалгасов Асхат",
		participant_en: "Zhalgasov Askhat",
		country_ru: "Казахстан",
		country_en: "Kazakhstan",
		problems1: [100, 100, 20, 100],
		problems2: [100, 18, 95, 100],
		place: "1DG",
	},
	{
		participant_ru: "Петреску Александру",
		participant_en: "Petrescu Alexandru",
		country_ru: "Румыния",
		country_en: "Romania",
		problems1: [100, 100, 10, 100],
		problems2: [100, 20, 90, 100],
		place: "2DG",
	},
	{
		participant_ru: "Крецу Богдан-Кристиан",
		participant_en: "Creţu Bogdan-Cristian",
		country_ru: "Румыния",
		country_en: "Romania",
		problems1: [100, 100, 15, 100],
		problems2: [100, 10, 90, 100],
		place: "2DG",
	},
	{
		participant_ru: "Мекумянов Семен Леонидович",
		participant_en: "Mekumyanov Semyon",
		country_ru: "Россия",
		country_en: "Russia",
		problems1: [100, 100, 10, 4],
		problems2: [100, 10, 95, 100],
		place: "3DG",
	},
	{
		participant_ru: "Нурахан Арлан Жомартулы",
		participant_en: "Nurakhan Arlan",
		country_ru: "Казахстан",
		country_en: "Kazakhstan",
		problems1: [100, 100, 10, 0],
		problems2: [100, 0, 95, 100],
		place: "3DG",
	},
	{
		participant_ru: "Георгеску Лаура-Иоана",
		participant_en: "Georgescu Laura-Ioana",
		country_ru: "Румыния",
		country_en: "Romania",
		problems1: [100, 100, 0, 20],
		problems2: [100, 22, 35, 100],
		place: "HML",
	},
	{
		participant_ru: "Харсан Овидиу-Разван",
		participant_en: "Harsan Ovidiu-Razvan",
		country_ru: "Румыния",
		country_en: "Romania",
		problems1: [100, 100, 0, 4],
		problems2: [100, 0, 30, 100],
		place: "HML",
	},
	{
		participant_ru: "Максимов Алексей Николаевич",
		participant_en: "Maksimov Alexey",
		country_ru: "Россия",
		country_en: "Russia",
		problems1: [100, 100, 5, 0],
		problems2: [100, 16, 0, 100],
		place: "HML",
	},
	{
		participant_ru: "Хайруллин Асхат Зиннурович",
		participant_en: "Khairullin Askhat",
		country_ru: "Россия",
		country_en: "Russia",
		problems1: [100, 100, 20, 4],
		problems2: [100, 7, 45, 0],
		place: "SA",
	},
	{
		participant_ru: "Гуринов Илья Петрович",
		participant_en: "Gurinov Iliya",
		country_ru: "Россия",
		country_en: "Russia",
		problems1: [100, 0, 10, 0],
		problems2: [100, 17, 15, 100],
		place: "",
	},
	{
		participant_ru: "Гаврильев Рубен Александрович",
		participant_en: "Gavriliev Ruben",
		country_ru: "Россия",
		country_en: "Russia",
		problems1: [100, 0, 10, 4],
		problems2: [100, 9, 0, 100],
		place: "",
	},
	{
		participant_ru: "Касымов Ернур",
		participant_en: "Kassymov Yernur",
		country_ru: "Казахстан",
		country_en: "Kazakhstan",
		problems1: [100, 100, 15, 0],
		problems2: [100, 0, 0, 0],
		place: "",
	},
	{
		participant_ru: "Гуринов Айтал Иванович",
		participant_en: "Gurinov Aytal",
		country_ru: "Россия",
		country_en: "Russia",
		problems1: [100, 15, 5, 0],
		problems2: [100, 12, 0, 0],
		place: "",
	},
	{
		participant_ru: "Булатов Василий Алквиадович",
		participant_en: "Bulatov Vasiliy",
		country_ru: "Россия",
		country_en: "Russia",
		problems1: [100, 0, 15, 0],
		problems2: [100, 0, 0, 0],
		place: "",
	},
	{
		participant_ru: "Осипова Валентина Иннокентьевна",
		participant_en: "Osipova Valentina",
		country_ru: "Россия",
		country_en: "Russia",
		problems1: [100, 0, 0, 0],
		problems2: [80, 0, 0, 0],
		place: "",
	},
	{
		participant_ru: "Канатников Егор Николаевич",
		participant_en: "Kanatnikov Egor",
		country_ru: "Россия",
		country_en: "Russia",
		problems1: [100, 0, 0, 0],
		problems2: [25, 0, 0, 0],
		place: "",
	},
	{
		participant_ru: "Шинкарев Валентин Романович",
		participant_en: "Shinkarev Valentin",
		country_ru: "Россия",
		country_en: "Russia",
		problems1: [100, 0, 0, 0],
		problems2: [25, 0, 0, 0],
		place: "",
	},
	{
		participant_ru: "Касым Ернур",
		participant_en: "Kassym Ernur",
		country_ru: "Казахстан",
		country_en: "Kazakhstan",
		problems1: [0, 0, 0, 0],
		problems2: [0, 0, 0, 0],
		place: "",
	},
	{
		participant_ru: "Павлов Степан Павлович",
		participant_en: "Pavlov Stepan",
		country_ru: "Россия",
		country_en: "Russia",
		problems1: [0, 0, 0, 0],
		problems2: [0, 0, 0, 0],
		place: "",
	},
];

export default function HomePage() {
	return (
		<>
			<h1>Tuymaada-2016</h1>
			<Link href="/">Главная</Link>
			<h2>Протокол</h2>
			<table className={styles.table}>
				<thead>
					<tr>
						<th rowSpan={2}>№</th>
						<th rowSpan={2}>ФИО участника / Full name</th>
						<th rowSpan={2}>Страна / Country</th>
						<th colSpan={4}>Задания 1 дня / First day problems</th>
						<th rowSpan={2}>Итого1 / Total1</th>
						<th colSpan={4}>Задания 2 дня / Second day problems</th>
						<th rowSpan={2}>Итого2 / Total2</th>
						<th rowSpan={2}>Итого / Total</th>
						<th rowSpan={2}>Место / Place</th>
					</tr>
					<tr>
						<th>1</th>
						<th>2</th>
						<th>3</th>
						<th>1</th>
						<th>2</th>
						<th>3</th>
					</tr>
				</thead>
				<tbody>
					{data.map((elem, i) => (
						<tr>
							<td>{i + 1}</td>
							<td>
								{elem.participant_ru}<br />{elem.participant_en}
							</td>
							<td>{elem.country_ru}<br />{elem.country_en}</td>
							<td className={styles.value}>{elem.problems1[0]}</td>
							<td className={styles.value}>{elem.problems1[1]}</td>
							<td className={styles.value}>{elem.problems1[2]}</td>
							<td className={styles.value}>{elem.problems1[3]}</td>
							<td className={styles.value}>
								{elem.problems1.reduce((s, v) => (s += v), 0)}
							</td>
							<td className={styles.value}>{elem.problems2[0]}</td>
							<td className={styles.value}>{elem.problems2[1]}</td>
							<td className={styles.value}>{elem.problems2[2]}</td>
							<td className={styles.value}>{elem.problems2[3]}</td>
							<td className={styles.value}>
								{elem.problems2.reduce((s, v) => (s += v), 0)}
							</td>
							<td className={styles.value}>
								{elem.problems1.reduce((s, v) => (s += v), 0) +
									elem.problems2.reduce((s, v) => (s += v), 0)}
							</td>
							<td className={styles.value}>{elem.place}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}
