<template>
	<div class="container">
		<section class="section">
			<collections-cards :title="categories.title" />
		</section>
	</div>
</template>

<script>
import CollectionsCards from '../components/CollectionCards.vue'

export default {
	components: {
		CollectionsCards,
	},
	data() {
		return {
			categories: {
				id: 0,
				title: 'Cakes',
				description: 'Yummy cakes lorem stuff',
				imageUrl: '../public/assets/cake-1.jpg',
				products: [
					{
						id: 1,
						link: 'chocolate-cake',
						title: 'Chocolate Cake',
						price: '50.00',
						description:
							'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
						imageUrl: '../assets/cake-1.jpg',
					},
					{
						id: '2',
						link: 'chocolate-chip-cake',
						title: 'Chocolate Chip Cake',
						price: '50.00',
						description:
							'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
						imageUrl: '../assets/cake-2.jpg',
					},
					{
						id: '4',
						link: 'chocolate-cake',
						title: 'Piece of Chocolate Cake',
						price: '15.00',
						description:
							'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
						imageUrl: '../assets/cake-3.jpg',
					},
					{
						id: '5',
						link: 'lemon-cake',
						title: 'Lemon Cake',
						price: '50.00',
						description:
							'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
						imageUrl: '../assets/cake-4.jpg',
					},
					{
						id: '6',
						link: 'orange-chocolate-cake-souffle',
						title: 'Orange Chocolate Cake Souffle',
						price: '60.00',
						description:
							'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
						imageUrl: '../assets/cake-5.jpg',
					},
					{
						id: '7',
						link: 'pink-strawberry-cake',
						title: 'Pink Strawberry Cake',
						price: '60.00',
						description:
							'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
						imageUrl: '../assets/cake-6.jpg',
					},
				],
			},
		}
	},
}
</script>
