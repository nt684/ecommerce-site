// Style product detail
<template>
	<div class="container">
		<section class="section">
			<div id="page-wrap">
				<div id="img-wrap">
					<img :src="product.imageUrl" />
				</div>
				<div id="product-details">
					<h1>{{ product.name }}</h1>
					<h3 id="price">${{ product.price }}</h3>
					<button id="add-to-cart">Add to Cart</button>
					<h4>Description</h4>
					<p>{{ product.description }}</p>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { products } from '../test-data'

export default {
	name: 'ProductDetail',
	data() {
		return {
			product: products.find(
				(p) => p.productLink === this.$route.params.productLink
			),
		}
	},
}
</script>

<style scoped>
#img-wrap {
	text-align: center;
}

img {
	width: 400px;
}

#product-details {
	padding: 16px;
	position: relative;
}

#add-to-cart {
	width: 100%;
}

#price {
	position: absolute;
	top: 24px;
	right: 16px;
}
</style>
