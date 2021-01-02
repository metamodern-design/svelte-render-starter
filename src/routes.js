import Home from '@/home/index.svelte';
import About from '@/about/index.svelte';

export const routes = [
  {
    path: '/',
    component: Home,
    title: 'Home',
    menus: ['main'],
    inset: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
  },
  {
    path: '/about',
    component: About,
    title: 'About',
    menus: ['main'],
  },
  {
    path: '/*',
    redirect: () => '/',
  },
];
