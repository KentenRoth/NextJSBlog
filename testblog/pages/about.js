import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div>
			<Head>
				<title>About</title>
				<meta name="description" content="Test Blog Site" />
			</Head>

			<main>
				<h1>About</h1>
			</main>
		</div>
	);
}
