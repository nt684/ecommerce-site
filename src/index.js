import dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'

dotenv.parse('.env')

const app = express()
app.set('view engine', 'ejs')
app.set('views', 'src/views')

app.use(helmet())
app.use('/public', express.static('src/public'))

/* Routes */
app.get('/', (req, res) => {
	res.redirect('/home')
})

app.get('/home', (req, res) => {
	res.set('Content-Type', 'text/html')
	res.render('home.ejs')
})

app.get('/pastry/:pastry', (req, res) => {
	// TODO: security
	res.render('pastry.ejs', {
		pastery: req.params.pastry,
	})
})

app.get('/cart', (req, res) => {
	res.render('cart.ejs')
})

app.get('/templatetest', (req, res) => {
	res.render('templatetest.ejs', {
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
