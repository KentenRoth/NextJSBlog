import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), '_content');

export function getAllPosts() {
	const allPosts = fs.readdirSync(contentDirectory);

	return allPosts.map((fileName) => {
		const slug = fileName.replace('.md', '');
		const fileContents = fs.readFileSync(
			path.join(contentDirectory, fileName),
			'utf8'
		);
		const { data, content } = matter(fileContents);
		return { data, content, slug };
	});
}

export const blogPosts = [
	{
		title: 'Post One',
		slug: 'post-one',
		date: 'June 1st 2021',
		content: 'This is my first post',
	},
	{
		title: 'Post Two',
		slug: 'post-two',
		date: 'June 15th 2021',
		content: 'This is my second Post',
	},
	{
		title: 'Post Three',
		slug: 'post-three',
		date: 'June 22nd 2021',
		content: 'This is my third post',
	},
];
