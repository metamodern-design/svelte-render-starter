import Home from '$routes/home/index.svelte';
import About from '$routes/about/index.svelte';

export const routes = [
  {
    path: '/',
    component: Home,
    title: 'Home',
  },
  {
    path: '/about',
    component: About,
    title: 'About',
  },
  {
    path: '/*',
    redirect: () => '/',
  },
];
