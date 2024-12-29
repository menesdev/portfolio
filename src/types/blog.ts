export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  markdown: string;
  author: string;
  date: string;
  imageUrl: string;
  tags?: string[];
}

export interface Author {
  name: string;
  avatar: string;
  bio: string;
}