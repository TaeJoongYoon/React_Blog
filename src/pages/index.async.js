import asyncRoute from '../lib/asyncRoute';

export const Home = asyncRoute(() => import('./Home'));
export const Posts = asyncRoute(() => import('./Posts'));
export const Post = asyncRoute(() => import('./Post'));
export const NewPost = asyncRoute(() => import('./PostNew')); 
export const NoMatch = asyncRoute(() => import('./NoMatch'));