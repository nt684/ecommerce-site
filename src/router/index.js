import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'

const routes = [
	{
		// usually the home page
		path: '/',
		name: 'LandingPage',
		component: LandingPage,
	},
	{
		path: '/cart',
		name: 'CartPage',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/CartPage.vue'),
	},
	{
		path: '/collections',
		name: 'CollectionsPage',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/CollectionsPage.vue'),
	},
	{
		path: '/products/:link',
		name: 'ProductDetailPage',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/ProductDetailPage.vue'),
	},
	{
		path: '/collections/cakes',
		name: 'CollectionsCakesPage',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "about" */ '../views/CollectionsCakesPage.vue'
			),
	},

	{
		path: '/login',
		name: 'UserLoginPage',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/UserLoginPage.vue'),
	},
	{
		path: '/account',
		name: 'UserAccountPage',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/UserAccountPage.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
