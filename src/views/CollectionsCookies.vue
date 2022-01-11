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
	name: 'CollectionsCookies',
	data() {
		return {
			collections: {
				id: 7,
				title: 'Cookies',
				description: 'Yummy cookies lorem stuff',
				imageUrl: '../assets/cookies-header.jpg',
				products: [
					{
						id: '13',
						link: 'fudgesicle',
						title: 'Fudgesicle',
						price: '35.00',
						description:
							'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
						imageUrl: '../assets/cookies-6.jpg',
					},
					{
						id: 8,
						link: 'sweet-macarons',
						title: 'Sweet Macarons',
						price: '35.00',
						description:
							'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
						imageUrl: '../assets/cookies-1.jpg',
					},
					{
						id: '9',
						link: 'snickerdoodles',
						title: 'Snickerdoodles',
						price: '35.00',
						description:
							'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
						imageUrl: '../assets/cookies-2.jpg',
					},
					{
						id: '11',
						link: 'chocolate-chip-cookies',
						title: 'Chocolate Chip',
						price: '25.00',
						description:
							'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
						imageUrl: '../assets/cookies-4.jpg',
					},
				],
			},
		}
	},
}
</script>
