import cakeImage1 from './assets/cake-1.jpg'
import cakeImage3 from './assets/cake-3.jpg'
import cakeImage5 from './assets/cake-5.jpg'
import cookiesImage6 from './assets/cookies-6.jpg'
import cookiesImage1 from './assets/cookies-1.jpg'
import cookiesImage2 from './assets/cookies-2.jpg'
import cookiesImage4 from './assets/cookies-4.jpg'
import cupcakesImage5 from './assets/cupcakes-5.jpg'
import cupcakesImage3 from './assets/cupcakes-3.jpg'
import cupcakesImage2 from './assets/cupcakes-2.jpg'
import piesImage1 from './assets/pies-1.jpg'
import piesImage2 from './assets/pies-2.jpg'
import piesImage3 from './assets/pies-3.jpg'

export const products = [
	{
		id: '6',
		typeLink: 'cakes',
		collection: 'Cakes',
		productLink: 'strawberry-dreams',
		title: 'Strawberry Dreams',
		price: '60.00',
		description:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
		imageUrl: cakeImage5,
	},
	{
		id: '3',
		typeLink: 'cakes',
		collection: 'Cakes',
		productLink: 'piece-of-heaven',
		title: 'Piece of Heaven',
		price: '20.00',
		description:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
		imageUrl: cakeImage3,
	},
	{
		id: 1,
		typeLink: 'cakes',
		collection: 'Cakes',
		productLink: 'cookie-monster',
		title: 'Cookie Monster',
		price: '60.00',
		description:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
		imageUrl: cakeImage1,
	},
	{
		id: '13',
		typeLink: 'cookies',
		collection: 'Cookies',
		productLink: 'fudgesicle',
		title: 'Fudgesicle',
		price: '35.00',
		description:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
		imageUrl: cookiesImage6,
	},
	{
		id: 8,
		typeLink: 'cookies',
		collection: 'Cookies',
		productLink: 'sweet-macarons',
		title: 'Sweet Macarons',
		price: '35.00',
		description:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
		imageUrl: cookiesImage1,
	},
	{
		id: '9',
		typeLink: 'cookies',
		collection: 'Cookies',
		productLink: 'snickerdoodles',
		title: 'Snickerdoodles',
		price: '35.00',
		description:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
		imageUrl: cookiesImage2,
	},
	{
		id: '11',
		typeLink: 'cookies',
		collection: 'Cookies',
		productLink: 'chocolate-chip-cookies',
		title: 'Chocolate Chip',
		price: '25.00',
		description:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
		imageUrl: cookiesImage4,
	},
	{
		id: '19',
		typeLink: 'cupcakes',
		collection: 'Cupcakes',
		productLink: 'blackberry-burst',
		title: 'Blackberry Burst',
		price: '30.00',
		description:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
		imageUrl: cupcakesImage5,
	},
	{
		id: '17',
		typeLink: 'cupcakes',
		collection: 'Cupcakes',
		productLink: 'german-chocolate',
		title: 'German Chocolate',
		price: '30.00',
		description:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
		imageUrl: cupcakesImage3,
	},
	{
		id: '16',
		typeLink: 'cupcakes',
		collection: 'Cupcakes',
		productLink: 'strawberry-cream',
		title: 'Strawberry Cream',
		price: '30.00',
		description:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
		imageUrl: cupcakesImage2,
	},

	{
		id: '24',
		typeLink: 'pies',
		collection: 'Pies',
		productLink: 'Apple-carmel',
		title: 'Apple Carmel',
		price: '60.00',
		description:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
		imageUrl: piesImage1,
	},
	{
		id: '26',
		typeLink: 'pies',
		collection: 'Pies',
		productLink: 'grannies-mint',
		title: "Granny's Apple Mint",
		price: '60.00',
		description:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
		imageUrl: piesImage2,
	},
	{
		id: '25',
		typeLink: 'pies',
		collection: 'Pies',
		productLink: 'cherry-pie',
		title: 'Cherry Pie',
		price: '50.00',
		description:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu.',
		imageUrl: piesImage3,
	},
]

export const cartItems = [products[0], products[2], products[3]]
