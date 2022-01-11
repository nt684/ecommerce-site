<template>
	<div id="collection-cards">
		<h1 class="title is-1">{{ title }} Page</h1>
		<div class="columns">
			<div
				v-for="product in categories.products"
				:key="product.id"
				class="column"
			>
				<router-link :to="'/products/' + product.link">
					<div class="card">
						<div class="card-image">
							<figure class="image is-4by3">
								<img :src="product.imageUrl" :alt="product.title" />
							</figure>
						</div>
						<div class="card">
							<div class="card-content">
								<div class="content">
									<h3 class="subtitle is-5">
										{{ product.title }}
									</h3>
									<p class="product__description">
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
</template>

<script>
export default {
	props: ['title'],
}
</script>
