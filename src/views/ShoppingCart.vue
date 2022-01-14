<template>
	<!-- Fix Total price javascript -->
	<div class="container">
		<section class="section">
			<h1 class="title is-1">My Cart</h1>
			<table class="table is-striped">
				<tbody>
					<tr>
						<div v-for="product in cartItems" :key="product.id">
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
									<nav class="level is-mobile">
										<div class="level-left">
											<a class="level-item">
												<span class="icon is-small"
													><i class="fas fa-reply"></i
												></span>
											</a>
											<a class="level-item">
												<span class="icon is-small"
													><i class="fas fa-retweet"></i
												></span>
											</a>
											<a class="level-item">
												<span class="icon is-small"
													><i class="fas fa-heart"></i
												></span>
											</a>
										</div>
									</nav>
								</div>
								<div class="media-right">
									<button class="delete"></button>
								</div>
							</article>
						</div>
					</tr>
				</tbody>
			</table>

			<h3 id="total-price">Total: ${{ totalPrice }}</h3>
			<div class="buttons">
				<a class="button is-primary" href="/checkout">Proceed to Checkout</a>
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
