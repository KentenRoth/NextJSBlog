import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Test Blog</title>
				<meta name="description" content="Test Blog Site" />
			</Head>

			<main className={styles.main}>
				<h1>Welcome</h1>
			</main>

			<footer className={styles.footer}></footer>
		</div>
	);
}
