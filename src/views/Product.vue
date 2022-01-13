// TODO: Replace images with better ones
<template>
	<div class="container">
		<section class="section">
			<h1 class="title is-1">{{ collectionOfProducts[0].collection }}</h1>
			<div class="columns">
				<div v-for="product in collectionOfProducts" :key="product.id">
					<div class="column">
						<router-link :to="'/products/' + product.productLink">
							<div class="card">
								<div class="card-image">
									<figure class="image">
										<img
											:src="product.imageUrl"
											:alt="product.title"
											width="250px"
											height="200px"
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
		</section>
	</div>
</template>

<script>
import { products } from '../product-data'

export default {
	name: 'ProductPage',

	computed: {
		collectionOfProducts() {
			return products.filter(
				(p) => p.collectionLink === this.$route.params.collectionLink
			)
		},
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
</style>
