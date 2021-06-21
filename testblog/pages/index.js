import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Test Blog</title>
				<meta name="description" content="Test Blog Site" />
			</Head>

			<main>
				<h1>Welcome</h1>
			</main>

			<footer></footer>
		</div>
	);
}
