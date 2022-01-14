<template>
	<!-- TODO: Fix Total price javascript -->
	<!-- TODO: Make it possible to delete cart items -->
	<div class="container">
		<section class="section">
			<div class="columns is-centered">
				<div class="column is-half">
					<h1 class="title is-1">My Cart</h1>
					<div class="box p-4">
						<div v-for="product in cartItems" :key="product.id" class="p-4">
							<article class="media">
								<figure class="media-left">
									<p class="image is-64x64">
										<img :src="product.imageUrl" :alt="product.title" />
									</p>
								</figure>
								<div class="media-content">
									<div class="content">
										<p>
											<strong>{{ product.title }}</strong>
											<br />
											${{ product.price }}
										</p>
									</div>
								</div>
								<div class="media-right">
									<button class="delete"></button>
								</div>
							</article>
						</div>
						<h3 id="total-price" class="">Total: ${{ totalPrice }}</h3>
						<a
							class="button is-primary is-fullwidth is-uppercase"
							href="/checkout"
							>Proceed to Checkout</a
						>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { cartItems } from '../product-data'

export default {
	name: 'ShoppingCart',

	data() {
		return {
			cartItems,
		}
	},
	computed: {
		totalPrice() {
			return this.cartItems.reduce((sum, item) => sum + Number(item.price))
		},
	},
}
</script>

<style scoped></style>
