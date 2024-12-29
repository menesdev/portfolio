import { readFile } from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export interface PostMetadata {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string;
}

export interface Post extends PostMetadata {
  id: string;
  content: string;
}

export async function getPostContent(id: string): Promise<Post> {
  const filePath = join(process.cwd(), 'src/posts', `${id}.md`);
  const fileContent = await readFile(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  
  return {
    id,
    ...data as PostMetadata,
    content: marked(content)
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const posts = await Promise.all([
    getPostContent('getting-started-with-typescript'),
    getPostContent('react-best-practices')
  ]);
  
  return posts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}