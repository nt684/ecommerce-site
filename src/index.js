import dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'
import path from 'path'

dotenv.parse('.env')

const app = express()
app.set('view engine', 'ejs')
app.set('views', 'src/views')

app.use(helmet())
app.use('/public', express.static(path.join(process.cwd(), 'src/public')))

/* Routes */
app.get('/', (req, res) => {
	res.redirect('/home')
})

app.get('/home', (req, res) => {
	res.render('home.ejs')
})

app.get('/pastry/:pastry', (req, res) => {
	// TODO: security
	res.render('pastry.ejs', {
		pastery: req.params.pastry,
	})
})

app.get('/cakes', (req, res) => {
	res.render('cakes.ejs')
})

app.get('/cookies', (req, res) => {
	res.render('cookies.ejs')
})

app.get('/cupcakes', (req, res) => {
	res.render('cupcakes.ejs')
})

app.get('/pies', (req, res) => {
	res.render('pies.ejs')
})

app.get('/cart', (req, res) => {
	res.render('cart.ejs')
})

app.get('/checkout', (req, res) => {
	res.render('checkout.ejs')
})

app.get('/login', (req, res) => {
	res.render('login.ejs')
})

app.get('/order', (req, res) => {
	res.render('order.ejs')
})

app.get('/user-profile', (req, res) => {
	res.render('user_profile.ejs', {
		user: {
			name: 'Mustache Man',
		},
	})
})

/** @type string */
const port = process.env.port || String(3000)

app.listen(port, () => {
	console.log(`Listening on http://localhost:${port}`)
})
