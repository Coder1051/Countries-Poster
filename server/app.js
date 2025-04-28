const express = require("express")
const path = require("path");
const cors = require('cors')
const { connectDB } = require("./data/utils");

const MyAdRouter = require('./routes/ad.route')
const app = express();


const publicFolder = path.resolve(__dirname, "public")

const port = process.env.PORT
const host = process.env.HOST


app.use(express.static(publicFolder))
app.use(express.json()) // ✅ add ()
app.use(express.urlencoded({ extended: true })) // ✅ add ()
app.use(cors())
app.use("/api/v1/ads",MyAdRouter)

app.get("/", (req, res) => {
    res.send("Welcome to the Self Posts Project Backend 🚀");
});


app.listen(port,host,()=>{
    connectDB()
    .then(() => {
        console.log('Db Connected');
        console.log(`http://${host}:${port} is ready...`);
    })
    
    .catch(err =>{
        console.log(err.message);
    })
})