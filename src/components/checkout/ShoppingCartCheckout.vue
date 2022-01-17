<template>
	<!-- TODO: Make it possible to delete  items -->
	<!-- TODO: When item added add number to icon -->
	<div v-for="product in cartItems" :key="product.id" class="p-4">
		<article class="media">
			<figure class="media-left">
				<p class="image is-128x128">
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
	<div class="block">
		<h3 id="total-price" class="subtitle is-5">Total: ${{ totalPrice }}</h3>
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
