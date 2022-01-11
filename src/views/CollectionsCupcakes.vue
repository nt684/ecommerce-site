<template>
	<div class="container">
		<section class="section">
			<h1 class="title is-1">{{ collections.title }}</h1>
			<div class="columns">
				<div
					v-for="product in collections.products"
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
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			collections: {
				id: 14,
				title: 'Cupcakes',
				description: 'Yummy Cupcakes lorem stuff',
				imageUrl: '../assets/cupcakes-header.jpg',
				products: [
					{
						id: '19',
						link: 'blackberry-burst',
						title: 'Blackberry Burst',
						price: '30.00',
						description:
							'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
						imageUrl: '../assets/cupcakes-5.jpg',
					},
					{
						id: '17',
						link: 'german-chocolate',
						title: 'German Chocolate',
						price: '30.00',
						description:
							'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
						imageUrl: '../assets/cupcakes-3.jpg',
					},
					{
						id: '16',
						link: 'strawberry-cream',
						title: 'Strawberry Cream',
						price: '30.00',
						description:
							'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
						imageUrl: '../assets/cupcakes-2.jpg',
					},
				],
			},
		}
	},
}
</script>
