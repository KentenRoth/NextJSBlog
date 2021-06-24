import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '../lib/data';
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
				<div>
					{blogPosts.map((item) => (
						<div key={item.slug}>
							<div>
								<Link href={`/blog/${item.slug}`}>
									<a>{item.title}</a>
								</Link>
							</div>
							<div>{item.date.toString()}</div>
							<div>{item.content}</div>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}
