import styles from "../styles/tuy-2016.module.css";
import Container from '@mui/material/Container';
import AppBar from "../public/AppBar";

export default function Home(props) {
	const students = props.students;
	return (
		<>
			<AppBar />
			<Container>
				<h1>Tuymaada-2021</h1>
				<h2>Протокол</h2>
				<table className={styles.table}>
					<thead>
						<tr>
							<th rowSpan={2}>№</th>
							<th rowSpan={2}>ФИО участника / Full name</th>
							<th rowSpan={2}>Страна / Country</th>
							<th colSpan={3}>Задания 1 дня / First day problems</th>
							<th rowSpan={2}>Итого1 / Total1</th>
							<th colSpan={3}>Задания 2 дня / Second day problems</th>
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
						{students.map((elem, i) => (
							<tr>
								<td>{i + 1}</td>
								<td>
									{elem.participant_ru} / {elem.participant_en}
								</td>
								<td>{elem.country}</td>
								<td className={styles.value}>{elem.problems1[0]}</td>
								<td className={styles.value}>{elem.problems1[1]}</td>
								<td className={styles.value}>{elem.problems1[2]}</td>
								<td className={styles.value}>
									{elem.problems1.reduce((s, v) => (s += v), 0)}
								</td>
								<td className={styles.value}>{elem.problems2[0]}</td>
								<td className={styles.value}>{elem.problems2[1]}</td>
								<td className={styles.value}>{elem.problems2[2]}</td>
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
			</Container>
		</>
	);
}

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path';
export async function getStaticProps() {
	const filePath = path.join(process.cwd(), './public/data2021.json');
	const jsonData = await fsPromises.readFile(filePath);
	const objectData = JSON.parse(jsonData.toString());

	return {
		props: objectData
	};
}

//Прототип вывода данных???