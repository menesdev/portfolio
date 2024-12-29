let posts = [
  {
    id: '1',
    title: 'Getting Started with TypeScript and React',
    excerpt: 'Learn how to build modern web applications with TypeScript and React',
    content: 'TypeScript and React make a powerful combination for building scalable web applications...',
    author: 'Sarah Johnson',
    date: '2024-03-15',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
  },
];

export const getPosts = (req, res) => {
  res.json(posts);
};

export const createPost = (req, res) => {
  const post = {
    id: Date.now().toString(),
    ...req.body,
    date: new Date().toISOString().split('T')[0],
  };
  posts.push(post);
  res.status(201).json(post);
};