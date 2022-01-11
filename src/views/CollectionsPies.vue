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
				id: 21,
				title: 'Pies',
				description: 'Yummy pies lorem stuff',
				imageUrl: '../assets/pies-header.jpg',
				products: [
					{
						id: '24',
						link: 'Apple-carmel',
						title: 'Apple Carmel',
						price: '60.00',
						description:
							'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
						imageUrl: '../assets/pies-1.jpg',
					},
					{
						id: '26',
						link: 'grannies-mint',
						title: "Granny's Apple Mint",
						price: '60.00',
						description:
							'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
						imageUrl: '../assets/pies-2.jpg',
					},
					{
						id: '25',
						link: 'cherry-pie',
						title: 'Cherry Pie',
						price: '50.00',
						description:
							'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
						imageUrl: '../assets/pies-3.jpg',
					},
				],
			},
		}
	},
}
</script>
