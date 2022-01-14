<template>
	<!-- TODO: Make cycle through each category instead of repeating or make a component for the sections  -->
	<div class="container">
		<!-- Cakes -->
		<section class="section" id="cakes">
			<h1 class="title is-1">Cakes</h1>
			<div class="columns">
				<div v-for="product in products[0].Cakes" :key="product.id">
					<div class="column">
						<router-link :to="'/products/' + product.productLink">
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
		</section>

		<!-- Cookies -->
		<section class="section" id="cookies">
			<h1 class="title is-1">Cookies</h1>
			<div class="columns">
				<div v-for="product in products[1].Cookies" :key="product.id">
					<div class="column">
						<router-link :to="'/products/' + product.productLink">
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
		</section>

		<!-- Cupcakes -->
		<section class="section" id="cupcakes">
			<h1 class="title is-1">Cupcakes</h1>
			<div class="columns">
				<div v-for="product in products[2].Cupcakes" :key="product.id">
					<div class="column">
						<router-link :to="'/products/' + product.productLink">
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
		</section>

		<!-- Pies -->
		<section class="section" id="pies">
			<h1 class="title is-1">Pies</h1>
			<div class="columns">
				<div v-for="product in products[3].Pies" :key="product.id">
					<div class="column">
						<router-link :to="'/products/' + product.productLink">
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
</style>
