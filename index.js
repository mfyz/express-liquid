const express = require('express')
const path = require('path')
const { Liquid } = require('liquidjs')

const PORT = process.env.PORT || 8110

const app = express()

const engine = new Liquid({
	root: __dirname,
	extname: '.liquid'
})
app.engine('liquid', engine.express())
app.set('views', path.resolve(__dirname, "views"))

app.set('view engine', 'liquid')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
	res.render('home', {
		message: 'Hello there!',
		users: [
			{ name: "Peter", age: 24 },
			{ name: "Lucy", age: 34 }
		]
	})
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))