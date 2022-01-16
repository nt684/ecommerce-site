<template>
	<!-- TODO: Make cards smaller and scroll when more cards are added w/ arrow icon on right/left -->

	<div class="container">
		<section class="section">
			<div v-for="category in products" :key="category.id">
				<h1 class="title is-1 category-title">
					{{ category.title }}
				</h1>
				<div class="columns is-mobile">
					<div
						v-for="product in category.cardData"
						:key="product.id"
						class="block card-block"
					>
						<div class="column">
							<router-link :to="'/' + product.productLink">
								<div class="card">
									<div class="card-image">
										<figure class="image">
											<img
												:src="product.imageUrl"
												:alt="product.title"
												width="500px"
												height="400px"
											/>
										</figure>
									</div>
									<div class="card">
										<div class="card-content">
											<div class="content">
												<h3 class="subtitle is-5">
													{{ product.title }}
												</h3>
												<p class="product-description">
													{{ product.description }}
												</p>
												<p>Starting at ${{ product.price }}</p>
											</div>
										</div>
									</div>
								</div>
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { products } from '../product-data-home'

export default {
	name: 'ProductsPage',

	data() {
		return {
			products,
		}
	},
}
</script>

<style scoped>
.product-description {
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}
.card-block {
	padding-bottom: 1.5em;
}
</style>
