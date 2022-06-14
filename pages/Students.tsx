import styles from '../styles/index.module.css';
import fsPromises from 'fs/promises';
import path from 'path';
import Container from '@mui/material/Container';
import SearchAppBar from '../public/AppBar';
import { Grid, Paper, Typography, Box } from '@mui/material';

export default function Home(props) {
	const students = props.students;
	return (
		<div className={styles.content}>
			<SearchAppBar />
			<Container sx={{ marginY: 3 }}>
				<h1>Студенты</h1>
				<Grid container spacing={6}>
					{students.map((elem) => (
						<Grid item xs={3}>
							<Paper elevation={3}>

								<Box paddingX={1}>
									<Typography variant="subtitle1" component="h2">
										{elem.participant_ru}
									</Typography>
									<Box
										sx={{
											display: 'flex',
											alignItems: 'Center',
										}}
									>
										<Typography variant="body2" component="p" marginLeft={0.5}>
											{elem.country}
										</Typography>
									</Box>
								</Box>
							</Paper>
						</Grid >
					))}
				</Grid>
			</Container>
		</div >
	);
}

export async function getStaticProps() {
	const filePath = path.join(process.cwd(), './public/data2021.json');
	const jsonData = await fsPromises.readFile(filePath);
	const objectData = JSON.parse(jsonData.toString());

	return {
		props: objectData
	};
}