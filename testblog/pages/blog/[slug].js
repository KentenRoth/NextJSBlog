import Head from 'next/head';
import Image from 'next/image';
import { blogPosts } from '../../lib/data';

export default function Blog({ title, date, content }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name="description" content="Test Blog Site" />
			</Head>

			<main>
				<h1>{title}</h1>
				<div>{content}</div>
			</main>
		</div>
	);
}

export async function getStaticProps(context) {
	const { params } = context;
	return {
		props: blogPosts.find((item) => item.slug === params.slug),
	};
}

export async function getStaticPaths() {
	blogPosts.map((item) => item.slug);
	return {
		paths: blogPosts.map((item) => ({
			params: {
				slug: item.slug,
			},
		})),
		fallback: false,
	};
}
