<template>
	<div class="container">
		<section class="section">
			<h1 class="title is-1">{{ oneProduct.collection }}</h1>
			<div class="columns">
				<div v-for="item in categoryOfProducts" :key="item.id" class="column">
					<div class="column">
						<router-link :to="'/products/' + item.productLink">
							<div class="card">
								<div class="card-image">
									<figure class="image is-4by3">
										<img :src="item.imageUrl" :alt="item.title" />
									</figure>
								</div>
								<div class="card">
									<div class="card-content">
										<div class="content">
											<h3 class="subtitle is-5">
												{{ item.title }}
											</h3>
											<p class="product__description">
												{{ item.description }}
											</p>
											<p>Starting at ${{ item.price }}</p>
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
import { products } from '../test-data'

export default {
	name: 'ProductPage',
	data() {
		return {
			categoryOfProducts: products.filter(
				(p) => p.typeLink === this.$route.params.typeLink
			),
			oneProduct: products.find(
				(p) => p.typeLink === this.$route.params.typeLink
			),
		}
	},
}
</script>
