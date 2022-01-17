import { createRouter, createWebHistory } from 'vue-router'
import Products from '../views/Products.vue'

const routes = [
	{
		path: '/',
		name: 'Products',
		component: Products,
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
		path: '/order/delivery',
		name: 'OrderDelivery',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "OrderDelivery" */ '../views/OrderDelivery.vue'
			),
	},
	{
		path: '/order/checkout',
		name: 'OrderCheckout',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "OrderCheckout" */ '../views/OrderCheckout.vue'
			),
	},
	{
		path: '/sign-in',
		name: 'UserSignIn',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "UserSignIn" */ '../views/UserSignIn.vue'),
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
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
