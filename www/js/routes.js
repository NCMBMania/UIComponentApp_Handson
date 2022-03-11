
const routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/login/',
    componentUrl: './pages/auth.html',
    beforeEnter: function ({ resolve, reject, router }) {
      const user = ncmb.User.getCurrentUser();
      if (user) {
        reject();
        router.navigate('/');
      } else {
        resolve();
      }
    }
  },
  {
    path: '/tabs/',
    componentUrl: './pages/tabs.html',
    options: {
      props: {
        objectId: '2YAtnb0nxjjfbeZ3',
      },
    },
    tabs: [
      {
        id: 'tab1',
        path: '/',
        componentUrl: './pages/list.html',
      },
      {
        id: 'tab2',
        path: '/map/',
        componentUrl: './pages/map.html',
      },
      {
        id: 'tab3',
        path: '/information/',
        componentUrl: './pages/information.html',
      },
    ]
  },
  {
    path: '/list/entries/:objectId',
    componentUrl: './pages/detail.html',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
