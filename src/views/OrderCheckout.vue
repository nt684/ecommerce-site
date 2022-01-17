<template>
	<!-- TODO: create modals to change address, payment method -->
	<!-- TODO: improve inputs -->
	<!-- TODO: set up user data -->
	<div class="container">
		<section class="section">
			<h1 class="title is-3">Order</h1>
			<!-- Delivery -->
			<div class="block">
				<p class="subtitle is-5">
					<strong>Delivery Address: </strong>
				</p>
				<p class="subtitle is-5">{{ users[0].address }}</p>
				<router-link to="">Change</router-link>
			</div>
			<hr class="divide-line" />
			<!-- Payment -->
			<div class="block">
				<p class="subtitle is-5">
					<strong>Payment Information: </strong>
				</p>
				<p class="subtitle is-5">{{ users[0].payment }}</p>
				<router-link to="">Change</router-link>
				<hr class="divide-line" />
			</div>
			<!-- Shopping Cart -->
			<div class="block">
				<p class="subtitle is-5">
					<strong>Review Order: </strong>
				</p>
				<ShoppingCartCheckout />
				<hr class="divide-line" />
			</div>
			<router-link to="/order/delivery" class="navbar-item icon-text">
				<button class="button is-primary is-fullwidth is-uppercase">
					Complete Order
				</button>
			</router-link>
		</section>
	</div>
</template>

<script>
import ShoppingCartCheckout from '@/components/checkout/ShoppingCartCheckout.vue'
import { users } from '../user-data'

export default {
	name: 'OrderCheckout',
	components: { ShoppingCartCheckout },
	data() {
		return {
			users,
		}
	},
}
</script>
