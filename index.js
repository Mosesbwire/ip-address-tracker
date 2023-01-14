
const express = require('express')
const config = require('config')
const superagent = require('superagent')
const cors = require('cors')
const {check, validationResult} = require('express-validator')
const app = express()

const apiKey = config.get('apikey')

app.use(cors())
app.use(express.json({extended: false}))

app.get('/', async (req,res)=> {

	try {
		const resp = await superagent.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`)
		res.json(JSON.parse(resp.text))

	} catch (err) {
		console.error(err.message)
		res.status(500).send('Server Error')
	}
	
})



app.post('/getip',
	[
		check('address', 'Address is required').not().isEmpty()
	],
	async (req,res)=> {

	const errors = validationResult(req)
	if(!errors.isEmpty())
	{
		return res.status(400).json({errors: errors.array()})
	}

	const { address } = req.body
	try {
		const resp = await superagent.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${address}`)
	
		res.json(JSON.parse(resp.text))
	} catch (err) {
		console.error(err.message)
		res.status(500).send('Server Error')
	}
})

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> {
	console.log(`Server is running on PORT ${PORT}`)
})
