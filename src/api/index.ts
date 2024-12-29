import axios from 'axios';
import { BlogPost } from '../types/blog';

const API = axios.create({ baseURL: 'http://localhost:3000/api' });

export const getPosts = () => API.get<BlogPost[]>('/posts');
export const getPost = (slug: string) => API.get<BlogPost>(`/posts/${slug}`);
export const createPost = (post: Partial<BlogPost>) => API.post<BlogPost>('/posts', post);
export const getProjects = () => API.get('/projects');
export const submitContact = (formData: any) => API.post('/contact', formData);