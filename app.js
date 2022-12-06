const express=require('express');
const bodyParser=require('body-parser')
const sequelize=require('./util/database')
const path=require('path')
const cors=require('cors')
const adminRoutes=require('./routes/admin')

const app=express();

app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,'public')))

app.use(adminRoutes)

app.use(cors())

sequelize.sync()
.then((result) => {
    app.listen(3000)
}).catch((err) => {
    console.log(err);
});
