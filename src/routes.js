import Home from '@/home/index.svelte';
import About from '@/about/index.svelte';

export const routes = [
  {
    path: '/',
    component: Home,
    title: 'Home',
    menus: ['main'],
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
