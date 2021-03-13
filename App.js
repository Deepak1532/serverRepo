const express=require('express');
require('dotenv').config();
const database=require('./DB/Connection')
const {response}=require('express');
const bodyParser=require('body-parser');
const morgan=require('morgan');
const productRoute=require('./route/ProductRoute')
const userRoute=require('./route/UserRoute')
const validator=require('express-validator')
const cookieParser=require('cookie-parser')
const categoryroute=require('./route/CategoryRoute')
const orderRoute=require('./route/OrderRoute')
const cors=require('cors')

const App=express();

App.use(bodyParser.json())
App.use(morgan('dev'))
App.use(validator())
App.use(cors())
App.use(cookieParser())
App.use('/api',productRoute)
App.use('/api',categoryroute)
App.use('/api',userRoute)
App.use('/api',orderRoute)
App.use('/public/uploads',express.static('public/uploads'))

const port=process.env.PORT||8000;
App.listen(port,()=>console.log(`server running on port ${port}`));

// App.post('/api/listing',(req,res)=>{
//     console.log('')
// })

