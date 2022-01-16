<template>
	<!-- TODO: Make it possible to delete cart items -->
	<!-- TODO: When item added add number to cart icon -->
	<div class="container cart-container">
		<div class="block has-text-centered">
			<h3 id="total-price" class="subtitle is-6">
				Subtotal: ${{ totalPrice }}
			</h3>
			<a class="button is-primary" href="/checkout">Proceed to checkout</a>
		</div>
		<div v-for="product in cartItems" :key="product.id" class="p-4">
			<article class="media">
				<figure class="media-left">
					<p class="image is-64x64">
						<img :src="product.imageUrl" :alt="product.title" />
					</p>
				</figure>
				<div class="media-content">
					<div class="content">
						<p>${{ product.price }}</p>
					</div>
				</div>
				<div class="media-right">
					<button class="delete"></button>
				</div>
			</article>
		</div>
	</div>
</template>

<script>
import { cartItems } from '../../product-data'

export default {
	name: 'ShoppingCart',

	data() {
		return {
			cartItems,
		}
	},
	computed: {
		totalPrice() {
			return this.cartItems.reduce((sum, item) => sum + Number(item.price), 0)
		},
	},
}
</script>

<style scoped>
.cart-container {
	margin-top: 2em;
}
</style>
