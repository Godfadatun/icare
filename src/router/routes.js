
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'home', path: '', component: () => import('pages/Index.vue') },
      { name: 'prescription', path: 'prescription', component: () => import('pages/Prescription.vue') },
      { name: 'ambulance', path: 'ambulance', component: () => import('pages/Ambulance.vue') },
      { name: 'login', path: 'login', component: () => import('pages/Auth.vue') },
      { name: 'register', path: 'register', component: () => import('pages/Auth.vue') },
      { name: 'forgot', path: 'forgot', component: () => import('pages/Auth.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
