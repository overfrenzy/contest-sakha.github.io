import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import styles from '../styles/index.module.css';
import Container from '@mui/material/Container';
import AppBar from '../public/AppBar';

export default function HomePage() {
	return (
		<div className={styles.content}>
			<AppBar />
			<Container sx={{ marginY: 3 }}>
				<h1>Олимпиады по программированию Республики Саха (Якутия)</h1>
				<ButtonGroup variant="contained" color="primary">
					<Button href="/tuy-2005">
						Туймаада-2005
					</Button>
					<Button href="/tuy-2016">
						Туймаада-2016
					</Button>
					<Button href="/tuy-2021">
						Туймаада-2021
					</Button>
				</ButtonGroup>
			</Container>
		</div >
	);
}
