<template>
	<div class="container">
		<section class="section">
			<nav
				class="breadcrumb has-arrow-separator is-hidden-mobile"
				aria-label="breadcrumbs"
			>
				<ul>
					<li>
						<router-link to="/" class="navbar-item icon-text">
							Previous Page
						</router-link>
					</li>
					<li class="is-active">
						<a href="#">{{ product.title }}</a>
					</li>
				</ul>
			</nav>
			<div class="columns is-tablet">
				<div class="column">
					<figure class="image">
						<img
							:src="product.imageUrl"
							:alt="product.title"
							width="500px"
							height="400px"
						/>
					</figure>
				</div>
				<div class="column">
					<div class="block block-content">
						<div class="content">
							<h3 class="title is-3">
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
									<button
										class="button is-outlined is-dark custom-button is-uppercase"
									>
										<div class="icon">
											<span class="material-icons"> remove </span>
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
											<span class="material-icons"> remove </span>
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

	computed: {
		product() {
			return products.find(
				(p) => p.productLink === this.$route.params.productLink
			)
		},
	},
}
</script>

<style scoped>
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
