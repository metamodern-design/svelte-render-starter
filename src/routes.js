import Home from '@/home/index.svelte';
import About from '@/about/index.svelte';

export const routes = [
  {
    path: '/',
    component: Home,
    title: 'Home',
    menus: ['main'],
    inset: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=chad-montano-lP5MCM6nZ5A-unsplash.jpg&w=2400',
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
