const applicationRoutes = [
  {
    url: '/',
    text: 'Homepage',
  },
  {
    url: '/checkout',
    text: 'Checkout',
  },
  {
    url: '/admin',
    text: 'Admin',
    requiresAuth: true,
  },
  {
    url: '/login',
    text: 'Login',
  },
];

export default applicationRoutes;
