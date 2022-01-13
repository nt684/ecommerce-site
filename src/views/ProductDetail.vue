// TODO: Add breadcrumb navigation (add links)
<template>
	<div class="container">
		<section class="section">
			<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
				<ul>
					<li><a href="#">All Products</a></li>
					<li><a href="#">Collection of products</a></li>
					<li class="is-active"><a href="#">This Product</a></li>
				</ul>
			</nav>
			<div class="columns is-tablet">
				<div class="column">
					<figure class="image">
						<img
							:src="product.imageUrl"
							:alt="product.title"
							width="250px"
							height="200px"
						/>
					</figure>
				</div>
				<div class="column">
					<div class="block block-content">
						<div class="content">
							<h3 class="title is-1">
								{{ product.title }}
							</h3>
							<p class="product-description">
								{{ product.description }}
							</p>
						</div>
					</div>
					<div class="block">
						<nav class="level">
							<div class="field is-grouped">
								<p class="control">
									<button class="button is-outlined is-dark custom-button">
										<div class="icon">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="feather feather-minus"
											>
												<line x1="5" y1="12" x2="19" y2="12"></line>
											</svg>
										</div>
									</button>
								</p>
								<p class="control">
									<input
										class="input is-black"
										type="text"
										value="0"
										readonly
									/>
								</p>
								<p class="control">
									<button class="button is-outlined is-dark">
										<div class="icon">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="feather feather-plus"
											>
												<line x1="12" y1="5" x2="12" y2="19"></line>
												<line x1="5" y1="12" x2="19" y2="12"></line>
											</svg>
										</div>
									</button>
								</p>
							</div>
							<h3 class="subtitle is-3">${{ product.price }}</h3>
						</nav>
					</div>
					<div class="block">
						<button class="button is-primary is-uppercase is-fullwidth">
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { products } from '../product-data'

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

<style lang="scss" scoped>
input {
	width: 3em;
	text-align: center;
}

.button.is-dark.is-outlined:hover,
.button.is-dark.is-outlined:focus {
	background-color: turquoise;
	border-color: turquoise;
	color: white;
}

.block-content {
	padding-bottom: 3em;
}

img {
	border-radius: 0.25rem;
}
</style>
