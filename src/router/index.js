import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/cart',
		name: 'ShoppingCart',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "cart" */ '../views/ShoppingCart.vue'),
	},
	{
		path: '/checkout',
		name: 'Checkout',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "Checkout" */ '../views/Checkout.vue'),
	},
	{
		path: '/products',
		name: 'Products',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: ":collectionLink" */ '../views/Products.vue'),
	},
	{
		path: '/products/:productLink',
		name: 'ProductDetail',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: ":productLink" */ '../views/ProductDetail.vue'
			),
	},
	{
		path: '/login',
		name: 'UserLogin',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "login" */ '../views/UserLogin.vue'),
	},
	{
		path: '/account',
		name: 'UserAccount',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "account" */ '../views/UserAccount.vue'),
	},
	{
		path: '/',
		redirect: '/products',
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router