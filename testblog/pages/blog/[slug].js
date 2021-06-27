import Head from 'next/head';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { getAllPosts } from '../../lib/data';

export default function Blog({ title, date, content }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name="description" content="Test Blog Site" />
			</Head>

			<div>
				<div className="border-b-2 mb-4">
					<h1 className="text-3xl font-bold">{title}</h1>
					<div className="text-gray-600 text-xs">{date}</div>
				</div>

				<div className="prose">
					<MDXRemote {...content} />
				</div>
			</div>
		</div>
	);
}

export async function getStaticProps(context) {
	const allPosts = getAllPosts();
	const { params } = context;
	const { data, content } = allPosts.find(
		(item) => item.slug === params.slug
	);
	const mdxSource = await serialize(content);
	return {
		props: {
			...data,
			date: data.date,
			content: mdxSource,
		},
	};
}

export async function getStaticPaths() {
	return {
		paths: getAllPosts().map((post) => ({
			params: {
				slug: post.slug,
			},
		})),
		fallback: false,
	};
}
