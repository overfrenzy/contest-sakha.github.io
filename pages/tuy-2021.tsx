import Head from 'next/head';

export default function Home(props) {
	const students = props.students;
	return (
		<div style={{ padding: 30 }}>
			<Head>
				<title>2021</title>
			</Head>
			<div>
				{students.map((post) =>
					<div
						key={students.id}
						style={{ padding: 20, borderBottom: '1px solid #ccc' }}>
						<h2>{post.participant_ru}</h2>
						<p>{post.country}</p>
					</div>)}
			</div>
		</div>
	);
}

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path';
export async function getStaticProps() {
	const filePath = path.join(process.cwd(), './data2021.json');
	const jsonData = await fsPromises.readFile(filePath);
	const objectData = JSON.parse(jsonData.toString());

	return {
		props: objectData
	};
}

//Прототип вывода данных???