// const app = require('express')()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// const passport = require('passport')
const app = express();
const routes = require('./routes/routes')
const path = require('path')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', routes)

if (process.env.NODE_ENV === 'production') {


    app.use(express.static(path.resolve(__dirname, 'client/build')))
    app.use(express.static(path.resolve(__dirname, 'build', 'index.html')))
    console.log()


    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client/build/index.html'))
        // res.send(`<h1>ERORR 404, PAGE NOT FOUND</h1>`)
    })
}

const port = process.env.PORT || 9000;


app.listen(port, () => {
    if (process.env.NODE_ENV === 'production') {
        mongoose.connect('mongodb+srv://yakubebank:kadzee222.@cluster0-opegc.mongodb.net/test?retryWrites=true&w=majority', {
                useNewUrlParser: true
            })
            .then(() => {

                console.log("mongodb connected online")
            })
            .catch((err) => {
                console.log(err)
            })
    } else {
        mongoose.connect('mongodb://localhost:27017/EBanking', {
                useNewUrlParser: true
            })
            .then(() => {

                console.log("mongodb connected offline")
            })
            .catch((err) => {
                console.log(err)
            })

    }
    console.log(`our app is listening on port ${port}`)
})


// // befor
// mongoose.connect('mongodb://localhost:27017/EBanking', { useNewUrlParser: true })
// .then( ()=>{
//     app.listen(port, () => {
//         console.log(`e-Banking is using ${port}`)
//     }) 
// })
// .catch( err => console.log(err))

// this is cooladd



// 
//   we are happy here

// 