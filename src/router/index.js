import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
	{
		// usually the home
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/cart',
		name: 'ShoppingCart',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/ShoppingCart.vue'),
	},
	{
		path: '/collections',
		name: 'Collections',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Collections.vue'),
	},
	{
		path: '/products/:link',
		name: 'ProductDetail',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/ProductDetail.vue'),
	},
	{
		path: '/collections/cakes',
		name: 'CollectionsCakes',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/CollectionsCakes.vue'),
	},
	{
		path: '/collections/cupcakes',
		name: 'CollectionsCupcakes',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "about" */ '../views/CollectionsCupcakes.vue'
			),
	},
	{
		path: '/collections/pies',
		name: 'CollectionsPies',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/CollectionsPies.vue'),
	},
	{
		path: '/collections/cookies',
		name: 'CollectionsCookies',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/CollectionsCookies.vue'),
	},
	{
		path: '/login',
		name: 'UserLogin',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/UserLogin.vue'),
	},
	{
		path: '/account',
		name: 'UserAccount',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/UserAccount.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
