import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Student = ({ students }) => {
	return (
		<Grid item xs={3}>
			<Paper elevation={3}>
				<img
					src={students.Image}
					alt=""
					className="img"
				/>
				<Box paddingX={1}>
					<Typography variant="subtitle1" component="h2">
						{students.participant_ru}
						{students.country}
					</Typography>
				</Box>
			</Paper>
		</Grid >
	);
};

export default Student;