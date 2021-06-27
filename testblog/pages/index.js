import Head from 'next/head';
import Link from 'next/link';
import { getAllPosts } from '../lib/data';

export default function Home({ posts }) {
	return (
		<div>
			<Head>
				<title>Test Blog</title>
				<meta name="description" content="Test Blog Site" />
			</Head>

			<main>
				<div className="space-y-4">
					{posts.map((item) => (
						<BlogListItem key={item.slug} {...item} />
					))}
				</div>
			</main>
		</div>
	);
}

export async function getStaticProps() {
	const allPosts = getAllPosts();
	return {
		props: {
			posts: allPosts.map(({ data, content, slug }) => ({
				...data,
				date: data.date,
				content,
				slug,
			})),
		},
	};
}

function BlogListItem({ slug, title, date, content }) {
	return (
		<div className="border border-gray-200 shadow-md rounded p-4 hover:border-gray-300 hover:shadow-lg transition duration-200 ease-in">
			<div>
				<Link href={`/blog/${slug}`}>
					<a className="font-bold">{title}</a>
				</Link>
			</div>
			<div className="text-gray-600 text-xs">{date}</div>
			<div>{content.substring(0, 300)}</div>
		</div>
	);
}
