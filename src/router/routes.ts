const routes = [
  {
    path: '/',
    name: 'index-layout',
    component: () => import('@/layouts/index-layout.vue'),
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('@/pages/index.vue'),
      },
    ],
  },
]

export default routes
