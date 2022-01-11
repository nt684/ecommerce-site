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
				id: 0,
				title: 'Cakes',
				description: 'Yummy cakes lorem stuff',
				imageUrl: '../assets/cake-header.jpg',
				products: [
					{
						id: '6',
						link: 'strawberry-dreams',
						title: 'Strawberry Dreams',
						price: '60.00',
						description:
							'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
						imageUrl: '../assets/cake-5.jpg',
					},
					{
						id: '3',
						link: 'piece-of-heaven',
						title: 'Piece of Heaven',
						price: '20.00',
						description:
							'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
						imageUrl: '../assets/cake-3.jpg',
					},
					{
						id: 1,
						link: 'cookie-monster',
						title: 'Cookie Monster',
						price: '60.00',
						description:
							'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
						imageUrl: '../assets/cake-1.jpg',
					},
				],
			},
		}
	},
}
</script>
