import cakeImage1 from './assets/cake-1.jpg'
import cakeImage3 from './assets/cake-3.jpg'
import cakeImage5 from './assets/cake-5.jpg'
import cookiesImage6 from './assets/cookies-6.jpg'
import cookiesImage1 from './assets/cookies-1.jpg'
import cookiesImage4 from './assets/cookies-4.jpg'
import cupcakesImage5 from './assets/cupcakes-5.jpg'
import cupcakesImage3 from './assets/cupcakes-3.jpg'
import cupcakesImage2 from './assets/cupcakes-2.jpg'
import piesImage1 from './assets/pies-1.jpg'
import piesImage2 from './assets/pies-2.jpg'
import piesImage3 from './assets/pies-3.jpg'

export const products = [
	{
		id: '1',
		title: 'Cakes',
		cardData: [
			{
				id: 5,
				productLink: 'cookie-monster-cake',
				title: 'Cookie Monster Cake',
				price: '60.00',
				description:
					'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
				imageUrl: cakeImage1,
			},
			{
				id: '6',
				productLink: 'napoleon-cake',
				title: 'Napoleon Cake',
				price: '60.00',
				description:
					'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
				imageUrl: cakeImage5,
			},
			{
				id: '7',
				productLink: 'piece-of-heaven-cake',
				title: 'Piece of Heaven Cake',
				price: '20.00',
				description:
					'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
				imageUrl: cakeImage3,
			},
		],
	},
	{
		id: '2',
		title: 'Cookies',
		cardData: [
			{
				id: '8',
				collectionLink: 'cookies',
				collection: 'Cookies',
				productLink: 'fudgesicle-cookies',
				title: 'Fudgesicle Cookies',
				price: '35.00',
				description:
					'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
				imageUrl: cookiesImage6,
			},
			{
				id: '9',
				collectionLink: 'cookies',
				collection: 'Cookies',
				productLink: 'chocolate-chip-cookies',
				title: 'Chocolate Chip Cookies',
				price: '25.00',
				description:
					'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
				imageUrl: cookiesImage4,
			},
			{
				id: '10',
				collectionLink: 'cookies',
				collection: 'Cookies',
				productLink: 'sweet-macarons-cookies',
				title: 'Sweet Macarons Cookies',
				price: '35.00',
				description:
					'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
				imageUrl: cookiesImage1,
			},
		],
	},
	{
		id: '3',
		title: 'Cupcakes',
		cardData: [
			{
				id: '11',
				collectionLink: 'cupcakes',
				collection: 'Cupcakes',
				productLink: 'berry-burst-cupcakes',
				title: 'Berry Burst Cupcakes',
				price: '30.00',
				description:
					'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
				imageUrl: cupcakesImage5,
			},
			{
				id: '12',
				collectionLink: 'cupcakes',
				collection: 'Cupcakes',
				productLink: 'german-chocolate-cupcakes',
				title: 'German Chocolate Cupcakes',
				price: '30.00',
				description:
					'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
				imageUrl: cupcakesImage3,
			},
			{
				id: '13',
				collectionLink: 'cupcakes',
				collection: 'Cupcakes',
				productLink: 'strawberry-cream-cupcakes',
				title: 'Strawberry Cream Cupcakes',
				price: '30.00',
				description:
					'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
				imageUrl: cupcakesImage2,
			},
		],
	},
	{
		id: '4',
		title: 'Pies',
		cardData: [
			{
				id: '14',
				collectionLink: 'pies',
				collection: 'Pies',
				productLink: 'Apple-carmel-pie',
				title: 'Apple Carmel Pie',
				price: '60.00',
				description:
					'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
				imageUrl: piesImage1,
			},
			{
				id: '15',
				collectionLink: 'pies',
				collection: 'Pies',
				productLink: 'grannys-apple-pie',
				title: "Granny's Apple Pie",
				price: '60.00',
				description:
					'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
				imageUrl: piesImage2,
			},
			{
				id: '16',
				collectionLink: 'pies',
				collection: 'Pies',
				productLink: 'cherry-pie',
				title: 'Cherry Pie',
				price: '50.00',
				description:
					'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
				imageUrl: piesImage3,
			},
		],
	},
]

export const cartItems = [products[0], products[2], products[3]]
