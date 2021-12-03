import dotenv from 'dotenv'
import express from 'express'

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

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.listen(port, () => {
	console.log(`Listening on http://localhost:${port}`)
})
