const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'public/index.html')
})

app.listen(4000, () => {
    console.log('Server has been started on port 4000')
})