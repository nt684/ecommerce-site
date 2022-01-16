import { createRouter, createWebHistory } from 'vue-router'
import Products from '../views/Products.vue'

const routes = [
	{
		path: '/',
		name: 'Products',
		component: Products,
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
	},
	{
		path: '/:productLink',
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
		path: '/cart',
		name: 'ShoppingCart',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "cart" */ '../views/ShoppingCart.vue'),
	},
	{
		path: '/delivery',
		name: 'Delivery',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "delivery" */ '../views/Delivery.vue'),
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
		path: '/sign-in',
		name: 'UserSignIn',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "Sign in" */ '../views/UserSignIn.vue'),
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
		path: '/confirm-order',
		name: 'ConfirmOrder',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "confirm order" */ '../views/ConfirmOrder.vue'
			),
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
