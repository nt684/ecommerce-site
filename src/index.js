import dotenv from 'dotenv'
import express from 'express'
import path from 'path'

dotenv.parse('.env')

// The line following this comment is a comment that is written specifically so TypeScript knows
// the variable 'port' is a 'string'. Notice that if you change `String(3000)` to `3000`, an error
// will show up in the IDE. Writing JavaScript using these kinds of comments makes it a bit easier
// for people new to JavaScript to have type-checking, without having to learn TypeScript as well.
// People more experients with TypeScript can write these comments, and everyone benefits
// See the full specification here: https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html
/** @type string */
const port = process.env.port || String(3000)

const app = express()
app.set('view engine', 'ejs')
app.set('views', path.join(process.cwd(), 'src/views'))

app.get('/', (req, res) => {
	res.redirect('/home')
})

app.get('/home', (req, res) => {
	res.set('Content-Type', 'text/html')
	res.send(`<h1>Home</h1>
<a href='/templatetest'>Click to see Mustache man!</a>`)
})

app.get('/item/:item', (req, res) => {
	res.send(`Item ${req.params.item}`)
})

app.get('/cart', (req, res) => {
	res.send('Cart')
})

app.get('/profile', (req, res) => {
	res.send('Profile')
})

app.get('/templatetest', (req, res) => {
	res.render('templatetest.ejs', {
		user: {
			name: 'Mustache Man',
		},
	})
})

app.listen(port, () => {
	console.log(`Listening on http://localhost:${port}`)
})
